import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export const query = graphql`
  query($slug: String) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        body
      }
    }
  }
`

const Blog = props => {
  return (
    <Layout>
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: props.data.contentfulBlogPost.body.body,
        }}
      ></div>
    </Layout>
  )
}

export default Blog
