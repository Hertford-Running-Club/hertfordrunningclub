import React from "react"
import Calender from "../../../images/svgs/Calender"
import Styles from '../SingleWidgets/SingleWidget.module.scss'

const IconTextWidget = (props) => {

    return (
        <div className={Styles.widget}>
            {props.icon}
            <span>{props.text}</span>
        </div>
    )
}

IconTextWidget.defaultProps = {
    text: "default data",
}

export default IconTextWidget

