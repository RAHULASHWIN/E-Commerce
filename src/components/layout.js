/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
//import { useStaticQuery, graphql } from "gatsby"
import Footer from './Reusable/Footer'

import "./bootstrap.min.css"
import "./layout.css"
import Navbar from './Reusable/Navbar'

const Layout = ({children}) => (
  <div>
    <Navbar />
    {children}
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
