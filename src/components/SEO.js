import React from 'react'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

const SEO = ({ description, title }) => (
  <StaticQuery
    query={`${SeoQuery}`}
    render={(data) => {
      const metaTitle = title
        ? `${title} | ${data.site.siteMetadata.title}`
        : data.site.siteMetadata.title
      const metaDescription = description || data.site.siteMetadata.description

      return (
        <Helmet>
          <title>{metaTitle}</title>
          <meta name="description" content={metaDescription} />
          <script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo=bsca-gatsby-tutorial"></script>
        </Helmet>
      )
    }}
  />
)

const SeoQuery = graphql`
query {
  site {
    siteMetadata {
      title
      description
    }
  }
}
`

export default SEO
