import React from "react"
import Location from "../../../images/svgs/LocationIcon"
import Styles from '../SingleWidgets/SingleWidget.module.scss'

const Location = (props) => {

    return (
        <div className={Styles.widget}>
            <Location />
            <span>{props.text}</span>
        </div>
    )
}

Location.defaultProps = {
    location:"Location",
}

export default Location

