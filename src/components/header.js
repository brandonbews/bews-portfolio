import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header class="site-header">
    <div class="site-header__idenity">
      <div class="site-header__logo">
        <a href="#">
          <svg width="21" height="32" viewBox="0 0 21 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.7815 21.3134C20.4928 20.0597 19.9165 18.9397 19.0367 17.9451C17.7284 16.4657 15.9672 15.5194 13.7549 15.077C16.0052 14.086 17.4295 12.597 18.0358 10.6866C18.2594 9.97015 18.3755 9.1797 18.3755 8.33254C18.3755 6.7009 18.0064 5.25552 17.2693 4.01254C16.5317 2.77015 15.4617 1.78627 14.0589 1.07701C12.656 0.368358 10.7035 0 8.20243 0H0V10.6866V21.3134V32H10.6214C12.8904 32 14.7863 31.5743 16.3035 30.7779C17.8439 29.9702 19.0112 28.914 19.8066 27.6328C20.602 26.3516 21 24.8848 21 23.2531C21 22.5773 20.9224 21.9701 20.7815 21.3134Z" fill="black"/>
          </svg>      
        </a>
      </div>
      <h1 class="site-header__my-name">Brandon Bews</h1>
    </div>
    <div class="mobile-nav-toggle" id="mobile-nav-toggle">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="9" y1="8" x2="31" y2="8" stroke="#1E2025" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <line x1="1" y1="16" x2="31" y2="16" stroke="#1E2025" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <line x1="17" y1="24" x2="31" y2="24" stroke="#1E2025" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <div class="site-header__nav">
      <ul>
        <li><a href="#">My Projects</a></li>
        <li><a href="#">Get in Touch</a></li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
