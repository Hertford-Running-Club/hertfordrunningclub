import React from "react"
import ActivityIcon from '../../../images/svgs/ActivityIcon'
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
    icon: ActivityIcon
}

export default IconTextWidget

