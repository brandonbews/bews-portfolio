import React from 'react'
import { Link } from 'gatsby'

import Img from 'gatsby-image'

const PortfolioListItem = ({ post }) => {
  const skills = post.frontmatter.skills.map((skill) => (
    <li className="portfolio-project__skill">{skill}</li>
  ))
  return (
    <li className="portfolio-project grid__span-12 grid__span-6--md">
      <Link to={post.frontmatter.slug}>
        <Img
          className="portfolio-project__image"
          alt={post.frontmatter.featured_image_alt_text}
          fluid={post.frontmatter.featured_image.childImageSharp.fluid}
          width="668"
          height="732"
        />
        <div className="portfolio-project__meta">
          <h2 className="portfolio-project__name">{post.frontmatter.title}</h2>
          <p className="portfolio-project__entity">{post.frontmatter.entity}</p>
          <ul className="portfolio-project__skills">{skills}</ul>
        </div>
      </Link>
    </li>
  )
}
export default PortfolioListItem
