import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"

const contact = () => {
  return (
    <div>
      <Header />
      <h1>Contact</h1>
      <ul>
        <li>
          <a
            href="https://joshmu.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            joshmu.com
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/joshmu"
            target="_blank"
            rel="noopener noreferrer"
          >
            @joshmu
          </a>
        </li>
      </ul>
      <Footer />
    </div>
  )
}

export default contact
