import React from "react"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <section className="items">
      <div className="item">
        <h2 className="item-title"><a href="https://www.bestwestern.com/en_US/book/hotel-rooms.47076.html?groupId=W22MW6I4">
          Best Western Leesburg
        </a></h2>
        <p className="item-details">
          726 E Market St, Leesburg, VA 20176 <br />
          (703) 777-9400 <br />
        </p>
      </div>
      <div className="item">
        <h2 className="item-title"><a href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1546968560959&key=GRP&app=resvlink">
          Courtyard by Marriot Dulles Town Cente
        </a></h2>
        <p className="item-details">
        45500 Majestic Dr, Dulles, VA 20166 <br />
          (571) 434-6400 <br />
        </p>
      </div>
    </section>
  </Layout>
)

export default IndexPage
