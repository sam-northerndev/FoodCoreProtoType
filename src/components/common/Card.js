/* 
? Genereic Card Component
* Author: Sam Irvine
*/

import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import styles from "./Card.module.css"

const Card = ({ children, shadow, className }) => {
  return (
    <div
      className={classNames(
        styles.card,
        shadow && styles.shadowCard,
        className
      )}
    >
      {children}
    </div>
  )
}

Card.propTypes = {
  content: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default Card
