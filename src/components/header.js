import { Link } from "gatsby"
import React from "react"
import headerStyles from './header.module.scss'

const Header = () => (
  <header className={headerStyles.header}>
    <nav className={headerStyles.navBar}>
      <div className={headerStyles.link}>
        <Link
          className={headerStyles.gatsbyLink}
          to="/">Home
        </Link>
      </div>
      <div className={headerStyles.link}>
        <Link
          className={headerStyles.gatsbyLink}
          to="/details">Details
        </Link>
      </div>
      <div className={headerStyles.link}>
        <Link
          className={headerStyles.gatsbyLink}
          to="/coming-soon">Wedding Party
        </Link>
      </div>
      <div className={headerStyles.link}>
        <Link
          className={headerStyles.gatsbyLink}
          to="/accomodations">Accomodations
        </Link>
      </div>
      <div className={headerStyles.link}>
        <Link
          className={headerStyles.gatsbyLink}
          to="/coming-soon">RSVP
        </Link>
      </div>
      <div className={headerStyles.link}>
        <Link
          className={headerStyles.gatsbyLink}
          to="/questions">Questions
        </Link>
      </div>
      <div className={headerStyles.link}>
        <Link
          className={headerStyles.gatsbyLink}
          to="/coming-soon">Registry
        </Link>
      </div>
    </nav>
  </header>
)

export default Header
