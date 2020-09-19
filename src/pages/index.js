import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <section class="section section--intro grid">
      <div className="intro-content grid__start-2 grid__end-12 grid__start-3--sm grid__end-11--sm grid__start-3--md grid__end10--md grid__start-2--lg grid__end-8--lg grid__start-3--xl grid__end-8--xl">
        <h1>Hello.</h1>
        <p>
          My name is Brandon Bews. I’m a designer and developer living in California. I’m currently
          doing some stuff, and I like doing other kinds of stuff.
        </p>
        <p>
          These things are important to me, and I strive to do them in all the ways I can imagine to
          do them. Just a lot of really cool things, because I’m cool, and you want me to work for
          you.
        </p>
        <div class="button">
          <a href="#" className="button__content">
            <span className="button__label">Get in Touch</span>
          </a>
        </div>
        {/* <button class="button">
          <div className="button__content">
            <span className="button__label">Get in Touch</span>
          </div>
        </button> */}
      </div>
    </section>

    <section class="section section--portfolio grid">
      <div className="portfolio grid__start-1 grid__end-13">
        <div className="section__headline">
          <h1 className="section__headline-content">My Work</h1>
        </div>
        <ul className="portfolio__projects">
          <li className="portfolio-project"></li>
        </ul>
      </div>
    </section>
    <section class="section section--contact"></section>
  </Layout>
)

export default IndexPage
