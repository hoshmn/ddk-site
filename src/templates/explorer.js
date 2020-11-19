import React from "react"
import { Helmet } from "gatsby-theme-hyperobjekt-core"
import Page from "gatsby-theme-hyperobjekt-core/src/components/layout/page"
import { graphql } from "gatsby"
import Explorer from "ddk-map"

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
    allFile(
      filter: {
        extension: { eq: "json" }
        dir: { regex: "/explorer/g" }
        base: { eq: "lang.json" }
      }
    ) {
      edges {
        node {
          internal {
            content
          }
        }
      }
    }
  }
`

const ExplorerTemplate = ({ data: { mdx, allFile }, pageContext }) => {
  const {
    title,
    description,
    keywords,
    image,
    lang,
    isBlogPost,
  } = pageContext.frontmatter
  // Parse contents of json file for explorer strings.
  const json = JSON.parse(allFile.edges[0].node.internal.content)
  // console.log("explorer, ", json)
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
      <Explorer lang="en_US" langSet={json} />
    </Page>
  )
}

export default ExplorerTemplate
