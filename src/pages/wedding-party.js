import React from "react"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <section className="items">
      <div className="item">
        <h2 className="item-title">Best man <strong>Adam Binder</strong></h2>
        <p className="item-details">Brian's older brother</p>
      </div>
      <div className="item">
        <h2 className="item-title">Maid of honor <strong>Emily Maziarski</strong></h2>
        <p className="item-details">Katie's younger sister</p>
      </div>
    </section>
  </Layout>
)

export default IndexPage
