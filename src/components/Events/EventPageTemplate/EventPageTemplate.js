import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../layout"
import EventTypeIconRender from "../EventTypeIcon/EventTypeIconRenderer"
import LocationIcon from "../../../images/svgs/LocationIcon"
import ClockIcon from "../../../images/svgs/ClockIcon"
import TerrainIcon from "../../../images/svgs/TerrainIcon"
import Calender from "../../../images/svgs/Calender"
import SpeedometerIcon from "../../../images/svgs/SpeedometerIcon"
import Styles from "./EventPageTemplate.module.scss"

export default ({ data, pageContext }) => {
  console.log(pageContext)

  // return true if singular event, return false if recurring event
  const isSingularEvent = () =>
    typeof data.contentfulEvents === "object" &&
    data.contentfulEvents !== null &&
    data.contentfulRecurringEvents === null
      ? true
      : false

  if (isSingularEvent() === true) {
    data = data.contentfulEvents
    data.time = data.date.substr(11, 5)
    data.week = ""
    console.log(data)
  } else {
    data = data.contentfulRecurringEvents
    data.week = pageContext.week
    data.date = pageContext.date.substr(0, 10)
    console.log(data.date)
  }

  console.log(data)

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

  const {
    id,
    eventType,
    eventTitle,
    meetUpAddress: address,
    terrain,
    eventLevel,
    description,
    date,
    time,
    week,
  } = data

  return (
    <Layout>
      <div key={id} className={Styles.event}>
        <h1>{eventTitle}</h1>
        <hr />

        <div className={Styles.eventdetails}>
          <div className={Styles.block1}>
            <div className={Styles.datecontainer}>
              <p className={Styles.date}>{date.substr(8, 2)}</p>
              <p className={Styles.month}>{months[date.substr(5, 2) - 1]}</p>
            </div>
            <EventTypeIconRender eventType={eventType} id={id}/>

          </div>

          <div className={Styles.block2}>
            <p className={Styles.time}>
              <ClockIcon /> {time}
            </p>
            <p className={Styles.location}>
              <LocationIcon /> {address}
            </p>
            <p className={Styles.terrain}>
              <Calender /> {eventType} &nbsp;{" "}
              <span style={{ color: "lightgrey" }}>|</span> &nbsp;{" "}
              <TerrainIcon /> {terrain}{" "}
            </p>
            <p className={Styles.eventlevel}>
              <SpeedometerIcon /> {eventLevel}
            </p>
            <hr />
            <div
              className={description}
              dangerouslySetInnerHTML={{
                __html: description.childMarkdownRemark.html,
              }}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($eventid: String!) {
    contentfulEvents(id: { eq: $eventid }) {
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

    contentfulRecurringEvents(id: { eq: $eventid }) {
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
`
