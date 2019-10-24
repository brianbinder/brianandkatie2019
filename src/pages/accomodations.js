import React from "react"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <h1 className="page-header">Accomodations</h1>
    <div className="page-content row">
      <section className="">
        <h2 className="breathe">Courtyard Marriott Dulles Town Center</h2>
        <p><span>45500 Majestic Dr, Dulles, VA 20166</span></p>
        <p><span>(571) 434-6400</span></p>
        <p className="spacer"></p>
        <p>The shuttle departs at <strong>4:15</strong>.</p>
      </section>
      <section className="">
        <h2 className="breathe">Best Western Leesburg</h2>
        <h2 className="spacer"></h2>
        <p><span>726 E Market St, Leesburg, VA 20176</span></p>
        <p><span>(703) 777-9400</span></p>
        <p className="spacer"></p>
        <p>The shuttle departs at <strong>4:30</strong>.</p>
      </section>
    </div>
  </Layout>
)

export default IndexPage
