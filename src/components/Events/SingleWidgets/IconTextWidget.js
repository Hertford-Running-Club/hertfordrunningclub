import React from "react"
import PropTypes from 'prop-types';
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

IconTextWidget.propTypes = {
    text: PropTypes.string,
    icon: PropTypes.elementType
  };

export default IconTextWidget

