import React from 'react'
import Page from '../templates/Page'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { withUnpublishedPreview } from 'gatsby-source-prismic'

const NotFoundPage = () => (
  <Layout>
    <SEO title="Not found" />
    <div className="container">
      <h1>Oh no!</h1>
      <h3>We can't seem to find the page you're looking for.</h3>
      <br />
    </div>
  </Layout>
)

// If an unpublished `page` document is previewed, the Page template will be rendered.
export default withUnpublishedPreview(NotFoundPage, {
  templateMap: {
    page: Page,
  },
})
