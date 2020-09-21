import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { Link } from 'gatsby'

const NotFoundPage = () => (
  <Layout>
    {/* <SEO title="404: Not found" /> */}
    <section className="section grid">
      <div className="grid__start-2 grid__end-12">
        <h1>Bummer...</h1>
        <p>
          The page you're looking for doesn't seem to exist. If this seems like an error, please{' '}
          <Link to="/#get-in-touch">Get in Touch</Link> to let me know.
        </p>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
