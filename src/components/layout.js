import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Helmet } from 'react-helmet'

import Header from "./header"
import "./layout.scss"


const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="page">
        <Header siteTitle={data.site.siteMetadata.title} />
        <Helmet>
          <title>Brian & Katie</title>
          <link href="https://fonts.googleapis.com/css?family=Playfair+Display" rel="stylesheet"></link>
          <link rel="shortcut icon" type="image/png" href="/favicon2.ico"></link>
        </Helmet>
        <div className="content">
          <main>{children}</main>
          <footer className="footer">
            October 26, 2019
          </footer>
        </div>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
