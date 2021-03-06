import * as React from 'react'
import { withPreviewResolver } from 'gatsby-source-prismic'
import { linkResolver } from '../utils/linkResolver'
import Layout from '../components/Layout'

const PreviewPage = ({ isPreview, isLoading }) => {
    const previewText = isPreview ? 'Loading' : 'Not a preview!'
    return (
        <Layout>
            <p>{previewText}</p>
        </Layout>
    )
}

export default withPreviewResolver(PreviewPage, {
    repositoryName: 'bsca-gatsby-tutorial',
    linkResolver,
})