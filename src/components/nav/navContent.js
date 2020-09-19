import React, { useRef, useEffect } from 'react'

import useOutsideClick from './useOutsideClick'

import gsap from 'gsap'

const NavContent = (props) => {
  const { navState, setNavState } = props

  let mainNav = useRef(null)
  let mainNavContent = useRef()
  let mainNavItem1 = useRef(null)
  let mainNavItem2 = useRef(null)
  let mainNavTimelineOpen = useRef()

  //Nav animations
  useEffect(() => {
    mainNavTimelineOpen.current = gsap.timeline({ paused: true })
    mainNavTimelineOpen.current.to(mainNav, {
      duration: 0,
      display: 'block',
    })
    mainNavTimelineOpen.current.to(
      mainNav,
      { duration: 0.15, ease: 'power3.ease', delay: 0.15, backgroundColor: 'rgba(30,32,37,0.8)' },
      '<'
    )
    mainNavTimelineOpen.current.from(
      mainNavContent,
      { duration: 0.15, ease: 'power3.ease', delay: 0.15, opacity: 0, y: '-50' },
      '<'
    )
    mainNavTimelineOpen.current.from(
      [mainNavItem1, mainNavItem2],
      { duration: 0.2, ease: 'power3.ease', y: '-50', stagger: 0.05 },
      '<'
    )
    mainNavTimelineOpen.current.from(
      [mainNavItem1, mainNavItem2],
      { duration: 0.35, ease: 'power3.ease', opacity: 0, stagger: 0.1 },
      '<'
    )
  }, [])

  //Play animations when nav state changes
  useEffect(() => {
    navState
      ? mainNavTimelineOpen.current.timeScale(1).play()
      : mainNavTimelineOpen.current.timeScale(2.5).reverse()
  }, [navState])

  //Class to prevent overflow on html when nav is open
  useEffect(() => {
    navState
      ? document.querySelector('html').classList.add('html--overlay-open')
      : document.querySelector('html').classList.remove('html--overlay-open')
  }, [navState])

  //Detect click outside of nav when open
  const navWrap = useRef()
  useOutsideClick(navWrap, () => {
    if (navState) setNavState(!navState)
  })

  return (
    <nav className="main-nav" ref={(el) => (mainNav = el)}>
      <div ref={navWrap} class="main-nav__content-wrap">
        <div className="main-nav__content" ref={(el) => (mainNavContent = el)}>
          <ul className="main-nav__list">
            <li className="main-nav__item" ref={(el) => (mainNavItem1 = el)}>
              <a href="#">My Work</a>
            </li>
            <li className="main-nav__item" ref={(el) => (mainNavItem2 = el)}>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavContent
