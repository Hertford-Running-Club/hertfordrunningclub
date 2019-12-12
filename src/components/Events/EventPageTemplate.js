import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../layout"
import RunIcon from "../../images/svgs/RunIcon"
import RideIcon from "../../images/svgs/RideIcon"
import WalkIcon from "../../images/svgs/WalkIcon"
import MeetingIcon from "../../images/svgs/MeetingIcon"
import SocialIcon from "../../images/svgs/SocialIcon"
import LocationIcon from "../../images/svgs/LocationIcon"
import ClockIcon from "../../images/svgs/ClockIcon"
import TerrainIcon from "../../images/svgs/TerrainIcon"
import Calender from "../../images/svgs/Calender"
import SpeedometerIcon from "../../images/svgs/SpeedometerIcon"
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
    data.date = "test"
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
            <div className={Styles.eventicon}>
                  {console.log(eventType)}
                  {eventType === "Run" ? (
                    <RunIcon id={id} />
                  ) : eventType === "Ride" ? (
                    <RideIcon id={id} />
                  ) : eventType === "Walk" ? (
                    <WalkIcon id={id} />
                  ) : eventType === "Meeting" ? (
                    <MeetingIcon id={id} />
                  ) : eventType === "Social" ? (
                    <SocialIcon id={id} />
                  ) : null}
                </div>
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
              <span style={{ color: "lightgrey" }}>|</span> &nbsp;{" "}
              <SpeedometerIcon /> {eventLevel}
            </p>
            <hr />
            <div className={description}
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