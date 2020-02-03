/* 
? Generic Footer Component, consistent across all pages.
* Author: Sam Irvine
*/
import React from "react"
import styles from "./Footer.module.css"

const Footer = ({ collapsed }) => (
  <footer className={styles.footerContainer}>
    <h4 className={styles.by}>
      Made with{" "}
      <span role="img" aria-label="Coffee">
        ☕
      </span>{" "}
      by Sam Irvine
    </h4>
    <p className={styles.footerElement}>&copy; Dalhousie University, 2020</p>
  </footer>
)

export default Footer
