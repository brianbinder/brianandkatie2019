import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Helmet } from 'react-helmet'

import Header from "./header"

const style = {
  footer: {
    textAlign: 'left',
    fontSize: '12px'
  }
}

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
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Helmet>
          <title>Brian & Katie</title>
          <link href="https://fonts.googleapis.com/css?family=Playfair+Display" rel="stylesheet"></link>
        </Helmet>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          <footer style={style.footer}>
            October 26, 2019
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
