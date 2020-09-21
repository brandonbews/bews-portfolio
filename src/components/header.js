import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import Logo from './icons/logo.js'
import MainNav from './nav/mainNav.js'

import React, { useRef, useEffect } from 'react'

const Header = ({ siteTitle }) => {
  const siteHeaderWrap = useRef()
  const siteHeader = useRef()

  const checkHeaderScroll = (startDistance) => {
    if (siteHeader.current) {
      const distanceFromTop = siteHeader.current.getBoundingClientRect().top
      if (window.scrollY === 0) {
        siteHeaderWrap.current.classList.remove('site-header__wrap--detached')
      } else {
        if (distanceFromTop <= 8) {
          siteHeaderWrap.current.classList.add('site-header__wrap--detached')
        }
        if (window.scrollY <= startDistance - 8) {
          siteHeaderWrap.current.classList.remove('site-header__wrap--detached')
        }
      }
    }
  }

  useEffect(() => {
    const startDistanceFromTop = siteHeader.current.getBoundingClientRect().top
    if (window.scrollY === 0) {
      siteHeaderWrap.current.classList.remove('site-header__wrap--detached')
    }
    window.addEventListener('scroll', () => {
      checkHeaderScroll(startDistanceFromTop)
    })
    return () => {
      window.removeEventListener('scroll', () => {
        checkHeaderScroll(startDistanceFromTop)
      })
    }
  }, [])

  return (
    <div className="site-header__wrap" ref={siteHeaderWrap}>
      <header className="site-header" ref={siteHeader}>
        <div className="site-header__identity">
          <div className="site-header__logo">
            <Link href="/">
              <Logo />
            </Link>
          </div>
          <h1 className="site-header__brandon-bews">Brandon Bews</h1>
        </div>

        <MainNav />
      </header>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
