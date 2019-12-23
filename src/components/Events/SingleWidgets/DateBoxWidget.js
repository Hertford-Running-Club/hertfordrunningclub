import React from "react"
import Styles from '../SingleWidgets/DateBoxWidget.module.scss'

const DateBoxWidget = (props) => {

    return (

    <div className={Styles.datecontainer}>
        <p className={Styles.date}>{props.date}</p>
        <p className={Styles.month}>
          {props.month}
        </p>
        <p className={Styles.year}>{props.year}</p>
      </div>
    )
}

DateBoxWidget.defaultProps = {
    date: "date",
    month: "month",
    year: "" // developer/designer optional to put year if no props provided. 
}

export default DateBoxWidget







