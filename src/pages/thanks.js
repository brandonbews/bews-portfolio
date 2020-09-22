import React from 'react'

import Layout from '../components/layout'

import { Link } from 'gatsby'

const Thanks = () => (
  <Layout>
    {/* <SEO title="404: Not found" /> */}
    <section className="section grid">
      <div className="grid__start-2 grid__end-12">
        <h1>Thanks for reaching out!</h1>
        <p>I'll be in touch as soon as I can.</p>
        <div className="button button--below">
          <Link to="/" className="button__content">
            <span className="button__label">Back to Homepage</span>
          </Link>
        </div>
      </div>
    </section>
  </Layout>
)

export default Thanks
