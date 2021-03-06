import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../layout"
import SEO from "../../seo"
import EventTypeIconRender from "../EventTypeIcon/EventTypeIconRenderer"
import LocationIcon from "../../../images/svgs/LocationIcon"
import ClockIcon from "../../../images/svgs/ClockIcon"
import TerrainIcon from "../../../images/svgs/TerrainIcon"
import Calender from "../../../images/svgs/Calender"
import IconTextWidget from "../SingleWidgets/IconTextWidget"
import SpeedometerIcon from "../../../images/svgs/SpeedometerIcon"
import DateBoxWidget from "../SingleWidgets/DateBoxWidget"
import Styles from "./EventPageTemplate.module.scss"

export default ({ data, pageContext }) => {

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

  } else {
    data = data.contentfulRecurringEvents
    data.week = pageContext.week
    data.date = pageContext.date.substr(0, 10)

  }

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
      <SEO
        title={eventTitle}
        description="A Hertford Running Club Event. Come Join us."
      />
      <div key={`event-${id}`} className={Styles.event}>
        <h1>{eventTitle}</h1>
        <hr />

        <div className={Styles.eventdetails}>
          <div className={Styles.block1}>
            <DateBoxWidget
              date={date.substr(8, 2)}
              month={months[date.substr(5, 2) - 1]}
              year={date.substr(0, 4)}
            />

            <EventTypeIconRender eventType={eventType} id={`svg-${id}`} />

          </div>

          <div className={Styles.block2}>
            <div>
              <IconTextWidget icon={(<ClockIcon />)} text={time} />
            </div>
            <div>
              <IconTextWidget icon={(<LocationIcon />)} text={address} />
            </div>
            <div>
              <IconTextWidget icon={(<Calender />)} text={eventType} />

              <span style={{ color: "lightgrey", margin: "0 1em" }}>|</span>

              <IconTextWidget icon={(<TerrainIcon />)} text={terrain} />
            </div>

            <div>
              <IconTextWidget icon={(<SpeedometerIcon />)} text={eventLevel} />
            </div>
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
