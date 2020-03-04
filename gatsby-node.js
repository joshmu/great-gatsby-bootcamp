// create slug from md files
const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

// create blog pages from the slug
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // get path to template
  const blogTemplate = path.resolve("./src/templates/blog.js")
  // get the slugs
  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  // create page for each slug
  res.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogTemplate, // only path required, not actual component
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}

/*
// create blog pages from the slug
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // get path to template
  const blogTemplate = path.resolve("./src/templates/blog.js")
  // get the slugs
  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  // create page for each slug
  res.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: blogTemplate, // only path required, not actual component
      path: `/blog/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })
}
// */
