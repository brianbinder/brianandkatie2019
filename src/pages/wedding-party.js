import React from "react"

import Layout from "../components/layout"

const imgStyle = {
  maxWidth: 'calc(100vw - 35px)',
  maxHeight: '75vh'
};

const IndexPage = () => (
  <Layout>
    <h1 className="page-header">Wedding Party</h1>
    <div className="page-content details">
      <section>
        <h2 className="breathe">Best Man</h2>
        <img src="/adam.png" style={imgStyle}></img>
        <p><span>Adam Binder, Brian's older brother</span></p>
      </section>
      <section>
        <h2 className="breathe">Maid of Honor</h2>
        <img src="/emily.png" style={imgStyle}></img>
        <p><span>Emily Maziarski, Katie's younger sister</span></p>
      </section>
    </div>
  </Layout>
)

export default IndexPage
