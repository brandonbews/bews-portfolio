import React from 'react'

import Layout from '../components/layout'

import { graphql } from 'gatsby'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const skills = frontmatter.skills.map((skill) => (
    <li className="portfolio-article__pill portfolio-article__pill--skill">
      <span className="portfolio-article__pill-content">{skill}</span>
    </li>
  ))
  const tools = frontmatter.tools.map((tool) => (
    <li className="portfolio-article__pill">
      <span className="portfolio-article__pill-content">{tool}</span>
    </li>
  ))
  return (
    <Layout>
      <div className="portfolio-article">
        <article className="portfolio-article__content">
          <h1>{frontmatter.title}</h1>
          <h2 className="portfolio-article__entity">{frontmatter.entity}</h2>
          <ul className="portfolio-article__pills">{skills}</ul>
          <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />
          <h2 className="portfolio-article__tools">Tools</h2>
          <ul className="portfolio-article__pills">{tools}</ul>
        </article>
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
        entity
        skills
        tools
      }
    }
  }
`
