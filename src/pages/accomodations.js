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
        <p className="small"><span><a href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1546968560959&key=GRP&app=resvlink">Book online</a> or mention the Binder-Maziarski wedding when calling</span></p>
      </section>
      <section className="">
        <h2 className="breathe">Best Western Leesburg</h2>
        <h2 className="spacer"></h2>
        <p><span>726 E Market St, Leesburg, VA 20176</span></p>
        <p><span>(703) 777-9400</span></p>
        <p className="spacer"></p>
        <p className="small"><span><a href="https://www.bestwestern.com/en_US/book/hotel-rooms.47076.html?groupId=W22MW6I4">Book online</a> or mention the Binder-Maziarski wedding when calling</span></p>
      </section>
    </div>
  </Layout>
)

export default IndexPage
