import { Link } from "gatsby"
import React from "react"
import headerStyles from './header.module.scss'

const Header = () => (
  <header
    style={{
      marginBottom: `1.45rem`,
      marginTop: '10px',
      maxWidth: '100vw',
      boxSizing: 'border-box',
    }}
  >
    <nav className={headerStyles.navBar}>
      <div className={headerStyles.link}>
        <Link
          className={headerStyles.gatsbyLink}
          activeStyle={{ fontWeight: 'bold', color: 'purple' }} 
          to="/">Home
        </Link>
      </div>
      <div className={headerStyles.link}>
        <Link
          className={headerStyles.gatsbyLink}
          activeStyle={{ fontWeight: 'bold', color: 'purple' }} 
          to="/details">Details
        </Link>
      </div>
      <div className={headerStyles.link}>
        <Link
          className={headerStyles.gatsbyLink}
          activeStyle={{ fontWeight: 'bold', color: 'purple' }} 
          to="/wedding-party">Wedding Party
        </Link>
      </div>
      <div className={headerStyles.link}>
        <Link
          className={headerStyles.gatsbyLink}
          activeStyle={{ fontWeight: 'bold', color: 'purple' }} 
          to="/accomodations">Accomodations
        </Link>
      </div>
      <div className={headerStyles.link}>
        <Link
          className={headerStyles.gatsbyLink}
          activeStyle={{ fontWeight: 'bold', color: 'purple' }} 
          to="/rsvp">RSVP
        </Link>
      </div>
      <div className={headerStyles.link}>
        <Link
          className={headerStyles.gatsbyLink}
          activeStyle={{ fontWeight: 'bold', color: 'purple' }} 
          to="/questions">Questions
        </Link>
      </div>
      <div className={headerStyles.link}>
        <Link
          className={headerStyles.gatsbyLink}
          activeStyle={{ fontWeight: 'bold', color: 'purple' }} 
          to="/registry">Registry
        </Link>
      </div>
    </nav>
  </header>
)

export default Header
