import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import Logo from './icons/logo.js'
import MainNav from './nav/mainNav.js'

import React from 'react'

const Header = ({ siteTitle }) => (
  <header className="site-header">
    <div className="site-header__identity">
      <div className="site-header__logo">
        <a href="#">
          <Logo />
        </a>
      </div>
      <h1 className="site-header__brandon-bews">Brandon Bews</h1>
    </div>

    <MainNav />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
