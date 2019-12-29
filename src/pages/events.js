import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Styles from "../components/Events/EventsPage.module.scss"
import EventTypeIconRender from "../components/Events/EventTypeIcon/EventTypeIconRenderer"
import "../components/Instagram/ExperiencesReactSlickOveride.scss"
import LocationIcon from "../images/svgs/LocationIcon"
import ClockIcon from "../images/svgs/ClockIcon"
import IconTextWidget from "../components/Events/SingleWidgets/IconTextWidget"
import TerrainIcon from "../images/svgs/TerrainIcon"
import Calender from "../images/svgs/Calender"
import DateBoxWidget from "../components/Events/SingleWidgets/DateBoxWidget"


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

  const createEventDate = (day, time, daysToAdd = 0) => {
    // given a day and time create recurring event.
    day = day.toLowerCase()
    const dayIndex = getDayIndex(day)

    let eventDate = new Date() // starts with today's date
    // sets the new date using the below formula
    eventDate.setDate(
      eventDate.getDate() +
      ((dayIndex + 7 - eventDate.getDay()) % 7) +
      daysToAdd
    )
    eventDate.setHours(time.substr(0, 2))
    eventDate.setMinutes(time.substr(3, 4))
    eventDate.setSeconds("00")
    return eventDate
  }

  // creates a recurring date for each event.
  data.allContentfulRecurringEvents.edges.forEach(event => {
    // this creates the events for the next two weeks.

    // creates the dates from the day and time given
    let eventDate = createEventDate(event.node.day, event.node.time, 0)
    let eventDate2 = createEventDate(event.node.day, event.node.time, 7)
    // formats the dates into the same format for comparing and sorting
    eventDate = formatDate(eventDate)
    eventDate2 = formatDate(eventDate2)

    // shortens the object to one level as shadow cloning only does one level of cloning
    event = event.node

    // shadow clone the object for the second week
    const event2 = Object.assign({}, event)

    // sets the two different dates to each object
    event.date = eventDate
    event2.date = eventDate2

    //  sets the the recurring week to it.
    event.week = 1
    event2.week = 2


    // pushes the event objects to upcoming events array list
    upcomingEvents.push(event)
    upcomingEvents.push(event2)

    // ======= Scalable code (in works) =============
    // the code below is written to allow as many weeks as specificed however may need deep cloning.
    // const numberWeeksToDisplay = 2
    // const daysToAdd = (numberWeeksToDisplay-1)*7
    // event = event.node

    // for (let index = 0; index < numberWeeksToDisplay; index++) {
    //   const eventObject = {...event}
    //   let eventDate = createEventDate(eventObject.day, eventObject.time, daysToAdd)
    //   eventDate = formatDate(eventDate)
    //   eventObject.date = eventDate
    //   upcomingEvents.push(eventObject)
    // }
    // =================================================
  })

  // filters old events out by pushing all future events into events array
  data.allContentfulEvents.edges.forEach(event => {
    // takes the time from the string and adds new property to event object
    event.node.time = event.node.date.substr(11, 5)
    // if the event day is after today then push to array
    if (event.node.date > getTodaysDateAndTime()) {
      upcomingEvents.push(event.node)
    }
  })

  upcomingEvents.sort(function (a, b) {
    // sorts the date in descending order
    return new Date(b.date) - new Date(a.date)
  })

  // do not change order of month jsx relies on it.
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]

  return (
    <Layout>
      <section className={Styles.events}>
        <h2>Events</h2>

        {upcomingEvents.map((event, index) => {
          const {
            id,
            eventType,
            eventTitle,
            date,
            meetUpAddress: address,
            time,
            terrain,
          } = event
          return (
            <div key={`eventmenu-${id}-${index}`} className={Styles.event}>

              <div className={Styles.block1}>
                <DateBoxWidget
                  date={date.substr(8, 2)}
                  month={months[date.substr(5, 2) - 1]}
                  year={date.substr(0, 4)}
                />
                <EventTypeIconRender
                  eventType={eventType}
                  id={`${id}`}
                />
              </div>

              <div className={Styles.block2}>
                <h4 className={Styles.title}>{eventTitle}</h4>
                <div className={Styles.innerblock2}>

                  <div>
                    <IconTextWidget
                      icon={(<ClockIcon />)}
                      text={time}
                    />
                  </div>
                  <div>
                    <IconTextWidget
                      icon={(<LocationIcon />)}
                      text={address}
                    />
                  </div>
                  <div>
                    <IconTextWidget
                      icon={(<Calender />)}
                      text={eventType}
                    />
                    <span style={{ color: "lightgrey", margin: "0 1em" }}>|</span>
                    <IconTextWidget
                      icon={(<TerrainIcon />)}
                      text={terrain}
                    />
                  </div>

                  <Link
                    to={`events/${id.substr(0, 8)}${
                      event.week ? "/week" + event.week :""
                    }`}
                    className={Styles.link}>
                    <button className={Styles.linkbtn}>
                      Full Details &#8594; {/*  arrows unicode */}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </section>
    </Layout>
  )
}

export default Events
