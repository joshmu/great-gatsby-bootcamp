import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"
import contactStyles from "./contact.module.scss"

const contact = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <ul className={contactStyles.list}>
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
    </Layout>
  )
}

export default contact
