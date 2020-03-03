import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header>
      <div>
        <h1>Gatsby Project 1</h1>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
