import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Slider from "react-slick";
import Styles from "./Events.module.scss"
import '../Instagram/ExperiencesReactSlickOveride.scss'

const Events = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulEvents {
        edges {
          node {
            id
            eventType
            eventTitle
            meetUpAddress
            terrain
            eventLevel
            description {
              childMarkdownRemark {
                html
              }
            }
            date(formatString: "")
          }
        }
      }
      allContentfulRecurringEvents {
        edges {
          node {
            id
            eventType
            eventTitle
            meetUpAddress
            terrain
            eventLevel
            description {
              childMarkdownRemark {
                html
              }
            }
            day
            time
          }
        }
      }
    }
  `)

  // formats date to show date and time only in this format (2019-12-27T00:00)
  const formatDate = date => {
    date = new Date(date)
    const dd = String(date.getDate()).padStart(2, "0")
    const mm = String(date.getMonth() + 1).padStart(2, "0") //January is 0!
    const yyyy = date.getFullYear()
    date = yyyy + "-" + mm + "-" + dd
    return date
  }

  // returns a formatted date and time
  const getTodaysDateAndTime = () => {
    const today = new Date()
    const date = formatDate(today)
    return date
  }

  const upcomingEvents = []

  const getDayIndex = day => {
    // takes a day of the week as a string value and gives the index value of the day you want.
    const days = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday",
    ]
    return days.indexOf(day)
  }

  const createEventDate = (day, time) => {
    // given a day and time create recurring event.
    day = day.toLowerCase()
    console.log(day, time)
    const dayIndex = getDayIndex(day)

    let eventDate = new Date() // starts with today's date
    // sets the new date using the below formula
    eventDate.setDate(
      eventDate.getDate() + ((dayIndex + 7 - eventDate.getDay()) % 7)
    )
    eventDate.setHours(time.substr(0, 2))
    eventDate.setMinutes(time.substr(3, 4))
    eventDate.setSeconds("00")
    console.log(eventDate)
    return eventDate
  }

  // filters old events out by pushing all future events into events array
  data.allContentfulEvents.edges.map(event => {
    console.log(event.node.date.substr(0, 10))
    event.node.time = event.node.date.substr(11, 16)
    event.node.date = event.node.date.substr(0, 10)

    console.log(getTodaysDateAndTime())
    if (event.node.date > getTodaysDateAndTime()) {
      upcomingEvents.push(event.node)
    }
  })

  // creates a recurring date for each event.
  data.allContentfulRecurringEvents.edges.map(event => {
    let eventDate = createEventDate(event.node.day, event.node.time)
    eventDate = formatDate(eventDate)
    event.node.date = eventDate
    console.log(event)
    return upcomingEvents.push(event.node)
  })

  console.log(upcomingEvents)

  upcomingEvents.sort(function(a, b) {
    // sorts the date in descending order
    return new Date(a.date) - new Date(b.date)
  })

  const settings = {
    // centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 599,
        settings: {
          arrows: false,
          // centerMode: true,
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          // centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
    ],
  }

  return (
    <section className={Styles.events}>
      <h2>Upcoming Events</h2>

      <Slider {...settings}>
        {upcomingEvents.map(event => {
          const {
            id,
            eventType,
            eventTitle,
            meetUpAddress,
            date,
            eventLevel,
            description,
            terrain,
            time,
          } = event
          return (
            <div key={id} className={Styles.event}>
              <h4>{eventTitle}</h4>
              <h5>{date}</h5>
              <h5>{time}</h5>
              <p>{eventType}</p>
              <p>{meetUpAddress}</p>
            </div>
          )
        })}
      </Slider>
      
    </section>
  )
}

export default Events
