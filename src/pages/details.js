import React from "react"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <h1 className="page-header">Details</h1>
    <div className="page-content details">
      <section>
        <h2>Welcome Drinks</h2>
        <p><span>Friday, October 25, 2019</span></p>
        <p><span>7:30pm</span></p>
      </section>
      <section>
        <p><span>Courtyard Marriott Dulles</span></p>
        <p><span>Town Center</span></p>
        <p><span>45500 Majestic Dr.</span></p>
        <p><span>Dulles, VA 20166</span></p>
      </section>
      <section>
        <p><span>Come say hi! Everyone is invited for</span></p>
        <p><span>drinks with the bride and groom.</span></p>
      </section>
      <br />
      <section>
        <h2>Ceremony</h2>
        <p><span>Saturday, October 26, 2019</span></p>
        <p><span>5:30pm</span></p>
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
