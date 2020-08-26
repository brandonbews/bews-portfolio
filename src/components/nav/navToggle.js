import React, { useRef, useEffect } from 'react'

import gsap from 'gsap'

const NavToggle = (props) => {
  const { navState, setNavState } = props

  let navToggleLine1 = useRef(null)
  let navToggleLine2 = useRef(null)
  let navToggleLine3 = useRef(null)
  let navToggleTimeline = useRef()

  useEffect(() => {
    navToggleTimeline.current = gsap.timeline({ paused: true })
    navToggleTimeline.current.to([navToggleLine1, navToggleLine3], {
      duration: 0.15,
      ease: 'power3.ease',
      attr: { y1: '16', y2: '16' },
    })
    navToggleTimeline.current.to(navToggleLine3, { duration: 0, attr: { 'stroke-width': '0' } })
    navToggleTimeline.current.to([navToggleLine1, navToggleLine2], {
      duration: 0,
      attr: { x1: '1', x2: '31' },
    })
    navToggleTimeline.current.to(navToggleLine2, {
      duration: 0.15,
      ease: 'power3.ease',
      attr: { x1: '7', y1: '7', x2: '25', y2: '25' },
    })
    navToggleTimeline.current.to(
      navToggleLine1,
      { duration: 0.15, ease: 'power3.ease', attr: { x1: '7', y1: '25', x2: '25', y2: '7' } },
      '<'
    )
    navToggleTimeline.current.to(
      [navToggleLine1, navToggleLine2, navToggleLine3],
      { duration: 0.15, ease: 'power3.ease', attr: { stroke: '#ffffff' } },
      '<'
    )
  }, [])

  useEffect(() => {
    navState
      ? navToggleTimeline.current.timeScale(1).play()
      : navToggleTimeline.current.timeScale(1).reverse()
  }, [navState])

  return (
    <button className="mobile-nav-toggle" onClick={() => setNavState(!navState)}>
      <svg
        className="mobile-nav-toggle__svg"
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          className="mobile-nav-toggle__line-1"
          ref={(el) => (navToggleLine1 = el)}
          x1={9}
          y1={8}
          x2={31}
          y2={8}
          stroke="#1E2025"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          className="mobile-nav-toggle__line-2"
          ref={(el) => (navToggleLine2 = el)}
          x1={1}
          y1={16}
          x2={31}
          y2={16}
          stroke="#1E2025"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          className="mobile-nav-toggle__line-3"
          ref={(el) => (navToggleLine3 = el)}
          x1={17}
          y1={24}
          x2={31}
          y2={24}
          stroke="#1E2025"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}

export default NavToggle
