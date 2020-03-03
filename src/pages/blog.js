import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"

// SHOW LIST OF POSTS ON BLOG PAGE
// query title and date for each post in blog component
// render an ol on the page
// render a lit with a nested h2 (title) and p (date) for each post
// -- "render array of object"
// test

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <ol>
        {data.allMarkdownRemark.edges.map((edge, idx) => (
          <li key={idx}>
            <h2>{edge.node.frontmatter.title}</h2>
            <p>{edge.node.frontmatter.date}</p>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default BlogPage
