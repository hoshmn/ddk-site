import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import { Layout, Hero, Block } from "gatsby-theme-hyperobjekt-core"
import { graphql } from "gatsby"
import Explorer from "ddk-map"

import en_US from "../../config/lang/explorer/en_US.json"

export const query = graphql`
  query($pathSlug: String!) {
    mdx(frontmatter: { path: { eq: $pathSlug } }) {
      frontmatter {
        path
        hero {
          title
          description
          action
          link
        }
      }
      body
    }
  }
`

const ExplorerTemplate = ({ data: { mdx }, pageContext }) => {
  console.log("explorer, ", en_US, process.env.GATSBY_MAPBOX_API_TOKEN)
  const {
    title,
    description,
    keywords,
    image,
    lang,
    isBlogPost,
  } = pageContext.frontmatter
  return (
    <Layout
      {...{
        title,
        description,
        keywords,
        image,
        lang,
        isBlogPost,
      }}
    >
      <p>blah</p>
      <Explorer lang="en" langSet={en_US} />
    </Layout>
  )
}

export default ExplorerTemplate
