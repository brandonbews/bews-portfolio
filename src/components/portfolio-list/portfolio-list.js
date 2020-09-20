import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'

import PortfolioListItem from './portfolio-list-item.js'

export default function PortfolioList() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___priority] }) {
        edges {
          node {
            id
            frontmatter {
              entity
              priority
              skills
              title
              slug
              featured_image_alt_text
              featured_image {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const PortfolioPieces = data.allMarkdownRemark.edges.map((edge) => (
    <PortfolioListItem key={edge.node.id} post={edge.node} />
  ))
  return <ul className="portfolio__projects grid">{PortfolioPieces}</ul>
}
