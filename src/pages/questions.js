import React from "react"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <h1 className="page-header">Questions</h1>
    <div className="page-content row wrap">
      <section>
        <ul className="questions">
          <li>
            <h2 className="breathe">When does the shuttle leave?</h2>
            <p><span>The shuttle from <strong>Courtyard Marriott</strong> departs at <strong>4:15</strong>.</span></p>
            <p><span>The shuttle from <strong>Best Western</strong> departs at <strong>4:30</strong>.</span></p>
          </li>
          <li>
            <h2 className="breathe">Where is Leesburg, VA?</h2>
            <p><span>The city of Leesburg is about an hour west of Washington DC and about 30 minutes from Dulles.</span></p>
          </li>
          <li>
            <h2 className="breathe">Where should I stay?</h2>
            <p><span>We have two hotel blocks reserved; one in Leesburg (a bit closer to the wedding) and one in Dulles (nearer to DC and the Dulles airport).  Information for these is on the Accommodations page.</span></p>
          </li>
          <li>
            <h2 className="breathe">What should I wear?</h2>
            <p><span>We suggest cocktail attire, but please be comfortable.</span></p>
          </li>
        </ul>
      </section>
      <section>
        <ul className="questions">
          <li>
            <h2 className="breathe">Is the ceremony indoors?</h2>
            <p><span>Yes, the ceremony and reception are indoors so no need to worry about the weather.</span></p>
          </li>
          <li>
            <h2 className="breathe">Where is the reception and how late will it go?</h2>
            <p><span>The reception is at the same location as the ceremony and will go until 10pm.</span></p>
          </li>
          <li>
            <h2 className="breathe">Will there be parking at the venue?</h2>
            <p><span>Yes, there is parking at the venue.  We will also be providing a shuttle from the hotels listed on the Accommodations page.</span></p>
          </li>
          <li>
            <h2 className="breathe">Can I take pictures during the ceremony?</h2>
            <p><span>We ask that you don't take pictures during the ceremony itself; we will have photos available when we get them from our photographer.</span></p>
          </li>
        </ul>
      </section>
    </div>
  </Layout>
)

export default IndexPage
