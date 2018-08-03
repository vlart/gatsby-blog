import React from 'react'
import Link from 'gatsby-link'
import { strictEqual } from 'assert';

const IndexPage = ({data}) => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site "{data.site.siteMetadata.title}" </p>
    <p>Now go build something great.</p>
  </div>
)

export default IndexPage

export const query = graphql`
  query SiteMeta {
    site {
      siteMetadata {
        title
        desc
      }
    }
  }
`
