import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import PortfolioList from '../components/portfolio-list/portfolio-list.js'
import ContactForm from '../components/contact-form.js'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <section className="section section--intro grid">
      <div className="intro-content grid__start-2 grid__end-12 grid__start-3--sm grid__end-11--sm grid__start-3--md grid__end10--md grid__start-2--lg grid__end-8--lg grid__start-2--xl grid__end-7--xl">
        <h1>Hello.</h1>
        <p>
          My name is Brandon Bews. I'm a designer and front end developer, passionate about working
          and learning at the intersection between design and code. Welcome to my handbuilt home on
          the web.
        </p>
        <p>
          I currently manage marketing design and development at YDesign Group in California, as
          both a leader and an individual contributor. When I'm not in a browser, I'm usually
          playing video games or working on music.
        </p>
        <div className="button button--below">
          <a href="#get-in-touch" className="button__content">
            <span className="button__label">Get in Touch</span>
          </a>
        </div>
      </div>
    </section>

    <section id="portfolio" className="section section--portfolio grid">
      <div className="portfolio grid__start-1 grid__end-13 grid__start-2--sm grid__end-12--sm grid__start-1--md grid__end-13--md grid__start-2--lg grid__end-12--lg">
        <div className="section__headline">
          <h1 className="section__headline-content">My Work</h1>
        </div>
        <PortfolioList></PortfolioList>
      </div>
    </section>

    <section id="get-in-touch" className="section section--contact grid">
      <div className="grid__start-1 grid__end-13 grid__start-2--sm grid__end-12--sm grid__start-1--md grid__end-13--md grid__start-2--lg grid__end-12--lg">
        <div className="section__headline">
          <h1 className="section__headline-content">Get in Touch</h1>
        </div>
        <ContactForm></ContactForm>
      </div>
    </section>
  </Layout>
)

export default IndexPage
