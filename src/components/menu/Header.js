/* 
TODO Generic Header Component, consistent across all pages.
? Property - collapsed: flag that determines whether a smaller header is displayed.
* Author: Sam Irvine
*/

import React from "react"

import styles from "./Header.module.css"
import Logo from "../../images/mainLogo.png"

import PropTypes from "prop-types"

const Header = ({ collapsed }) => (
  <header className={styles.container}>
    <div className={styles.innerContainer}>
      <img alt="Icon" src={Logo} className={styles.logo} />
      <h1 className={styles.title}>FoodCore</h1>
    </div>
  </header>
)

Header.propTypes = {
  collapsed: PropTypes.bool.isRequired,
}

export default Header
