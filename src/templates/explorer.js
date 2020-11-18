import React from "react"
import { Helmet } from "gatsby-theme-hyperobjekt-core"
import Page from "gatsby-theme-hyperobjekt-core/src/components/layout/page"
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
    <Page>
      <Helmet
        {...{
          title,
          description,
          keywords,
          image,
          lang,
          isBlogPost,
        }}
      />
      <Explorer lang="en_US" langSet={langSet} />
    </Page>
  )
}

export default ExplorerTemplate
