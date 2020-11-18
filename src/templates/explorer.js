import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import { Layout, Hero, Block } from "gatsby-theme-hyperobjekt-core"
import { graphql } from "gatsby"
import Explorer from "ddk-map"

import langSet from "../../config/lang/explorer/lang.json"

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
      explorer={true}
    >
      <Explorer lang="en_US" langSet={langSet} />
    </Layout>
  )
}

export default ExplorerTemplate
