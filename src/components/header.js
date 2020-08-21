import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import Logo from './icons/logo.js'

import React from 'react'

const Header = ({ siteTitle }) => (
  <header class="site-header">
    <div class="site-header__idenity">
      <div class="site-header__logo">
        <a href="#">
          <Logo />
        </a>
      </div>
      <h1 class="site-header__brandon-bews">Brandon Bews</h1>
    </div>

    <div class="mobile-nav-toggle">
      <svg
        class="mobile-nav-toggle__svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          class="mobile-nav-toggle__line-1"
          x1="9"
          y1="8"
          x2="31"
          y2="8"
          stroke="#1E2025"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <line
          class="mobile-nav-toggle__line-2"
          x1="1"
          y1="16"
          x2="31"
          y2="16"
          stroke="#1E2025"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <line
          class="mobile-nav-toggle__line-3"
          x1="17"
          y1="24"
          x2="31"
          y2="24"
          stroke="#1E2025"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>

    <nav class="main-nav">
      <ul class="main-nav__content">
        <li class="main-nav__item">
          <a href="#">My Work</a>
        </li>
        <li class="main-nav__item">
          <a href="#">About Me</a>
        </li>
        <li class="main-nav__item">
          <a href="#">Contact Me</a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
