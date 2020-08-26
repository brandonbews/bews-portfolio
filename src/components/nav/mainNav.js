import React, { useState } from 'react'

import NavContent from './navContent.js'
import NavToggle from './navToggle.js'

const MainNav = () => {
  const [navState, setNavState] = useState(false)
  return (
    <div className="site-header__nav">
      <NavToggle navState={navState} setNavState={setNavState} />
      <NavContent navState={navState} setNavState={setNavState} />
    </div>
  )
}

export default MainNav
