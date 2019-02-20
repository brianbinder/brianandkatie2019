import React from "react"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <h1 className="page-header">Wedding Party</h1>
    <div className="page-content wedding-party">
      <section>
        <h2 className="breathe">Best Man</h2>
        <h2 className="breathe">Adam Binder</h2>
        <p><span>Brian's older brother...</span></p>
      </section>
      <section>
        <h2 className="breathe">Maid of Honor</h2>
        <h2 className="breathe">Emily Maziarski</h2>
        <p><span>Katie's younger sister...</span></p>
      </section>
    </div>
  </Layout>
)

export default IndexPage
