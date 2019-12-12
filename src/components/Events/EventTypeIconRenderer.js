import React from "react"
import RunIcon from "../../images/svgs/RunIcon"
import RideIcon from "../../images/svgs/RideIcon"
import WalkIcon from "../../images/svgs/WalkIcon"
import MeetingIcon from "../../images/svgs/MeetingIcon"
import SocialIcon from "../../images/svgs/SocialIcon"

const EventTypeIconRender = (props) => {
    const {eventType} = props

  return (
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

  )
}


