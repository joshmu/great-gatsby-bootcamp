import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

// import "./header.module.scss"
import headerStyles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={headerStyles.header}>
      <h1>
        <Link to="/" className={headerStyles.title}>
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              to="/blog"
              activeClassName={headerStyles.activeNavItem}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              to="/about"
              activeClassName={headerStyles.activeNavItem}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              to="/contact"
              activeClassName={headerStyles.activeNavItem}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
