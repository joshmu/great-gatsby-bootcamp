import React from "react"
import { Link } from "gatsby"

// import Header from "../components/header"
// import Footer from "../components/footer"

import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello</h1>
      <h2>I'm Josh, a full-stack developer living in beautiful Brisbane.</h2>
      <p>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}

export default IndexPage

// setup header component > site title + 4 links to pages
// render at the top of all pages
// test work
