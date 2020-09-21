import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import PortfolioList from '../components/portfolio-list/portfolio-list.js'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <section className="section section--intro grid">
      <div className="intro-content grid__start-2 grid__end-12 grid__start-3--sm grid__end-11--sm grid__start-3--md grid__end10--md grid__start-2--lg grid__end-8--lg grid__start-2--xl grid__end-7--xl">
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
        <div className="button">
          <a href="#" className="button__content">
            <span className="button__label">Get in Touch</span>
          </a>
        </div>
        {/* <button className="button">
          <div className="button__content">
            <span className="button__label">Get in Touch</span>
          </div>
        </button> */}
      </div>
    </section>

    <section className="section section--portfolio grid">
      <div className="portfolio grid__start-1 grid__end-13 grid__start-2--sm grid__end-12--sm grid__start-1--md grid__end-13--md grid__start-2--lg grid__end-12--lg">
        <div className="section__headline">
          <h1 className="section__headline-content">My Work</h1>
        </div>
        <PortfolioList></PortfolioList>
      </div>
    </section>

    <section className="section section--contact"></section>
  </Layout>
)

export default IndexPage
