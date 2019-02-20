import React from "react"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <h1 className="page-header">Details</h1>
    <div className="page-content details">
      <section>
        <h2>Ceremony</h2>
        <p><span>Saturday, October 26, 2019</span></p>
        <p><span>5:00pm</span></p>
      </section>
      <section>
        <p><span>The Manor at Airmont</span></p>
        <p><span>19246 Ebenezer Church Road</span></p>
        <p><span>Round Hill, VA, 20141</span></p>
      </section>
      <section>
        <p><span>Dinner and Dancing to follow</span></p>
      </section>
    </div>
  </Layout>
)

export default IndexPage
