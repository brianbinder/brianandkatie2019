import React from "react"
import { Helmet } from 'react-helmet'

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <Helmet>
      <html className="picture" />
    </Helmet>
  </Layout>
)

export default IndexPage
