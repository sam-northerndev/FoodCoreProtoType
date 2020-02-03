/* 
TODO Generic layout Component: Contains Global Application Styles
* Author: Sam Irvine
*/
import React from "react"
import PropTypes from "prop-types"
import styles from "./Layout.css"

// Components
import Header from "../menu/Header"
import Footer from "../menu/Footer"

const Layout = ({ children }) => (
  <div>
    <Header collapsed={false} />
    <div className={"content"}>{children}</div>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
