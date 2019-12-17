import React from "react"
import RunIcon from "../../../images/svgs/RunIcon"
import RideIcon from "../../../images/svgs/RideIcon"
import WalkIcon from "../../../images/svgs/WalkIcon"
import MeetingIcon from "../../../images/svgs/MeetingIcon"
import SocialIcon from "../../../images/svgs/SocialIcon"
import Styles from "./EventTypeIconRenderer.module.scss"

const EventTypeIconRender = (props) => {
    const {eventType, id} = props
    // The Component will render the correct SVG ICON 
    // depending on the event Type passed in as a prop
    // takes a string the props must be one of the following.
    // [Run, Ride, Walk, Meeting, Social]
  return (
    <div className={Styles.eventicon}>
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

  )
}

export default EventTypeIconRender

