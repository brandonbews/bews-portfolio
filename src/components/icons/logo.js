import React from 'react'

const Logo = () => (
  <svg width="21" height="32" viewBox="0 0 21 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="logo-gradient" gradientTransform="rotate(90)">
        <stop offset="0%" stopColor="var(--logoGradientSecondary)" />
        <stop offset="100%" stopColor="var(--logoGradientPrimary)" />
      </linearGradient>

      <linearGradient id="logo-glow-gradient" gradientTransform="rotate(90)">
        <stop offset="0%" stopColor="rgba(95,26,229,0.35)" />
        <stop offset="100%" stopColor="rgba(242,74,88,0.35)" />
      </linearGradient>

      <rect
        id="glowRect"
        height="50%"
        y="25%"
        x="20%"
        width="20%"
        fill="url(#logo-glow-gradient)"
      />

      <filter id="inset-shadow">
        <feFlood flood-color="rgba(0,0,0,0.75)" />
        <feComposite operator="out" in2="SourceGraphic" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite operator="atop" in2="SourceGraphic" />
      </filter>

      <filter id="inset-shadow--night" height="200%" width="500%" x="-100%" y="-50%">
        <feFlood in="SourceGraphic" flood-color="rgba(0,0,0,0.65)" result="innerFlood" />
        <feComposite operator="out" in="innerFlood" in2="SourceGraphic" result="comp1" />
        <feGaussianBlur stdDeviation="2.5" in="comp1" result="blur1" />
        <feComposite operator="atop" in="blur1" in2="SourceGraphic" result="comp2" />

        <feImage xlinkHref="#glowRect" result="glow-rect" />
        <feGaussianBlur in="glow-rect" stdDeviation="8" result="coloredBlur" />

        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="comp2" />
        </feMerge>
      </filter>

      <filter id="glow" height="200%" width="500%" x="-100%" y="-50%">
        <feGaussianBlur stdDeviation="5" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <path
      class="logo-path"
      filter="url(#inset-shadow)"
      d="M20.7815 21.3134C20.4928 20.0597 19.9165 18.9397 19.0367 17.9451C17.7284 16.4657 15.9672 15.5194 13.7549 15.077C16.0052 14.086 17.4295 12.597 18.0358 10.6866C18.2594 9.97015 18.3755 9.1797 18.3755 8.33254C18.3755 6.7009 18.0064 5.25552 17.2693 4.01254C16.5317 2.77015 15.4617 1.78627 14.0589 1.07701C12.656 0.368358 10.7035 0 8.20243 0H0V10.6866V21.3134V32H10.6214C12.8904 32 14.7863 31.5743 16.3035 30.7779C17.8439 29.9702 19.0112 28.914 19.8066 27.6328C20.602 26.3516 21 24.8848 21 23.2531C21 22.5773 20.9224 21.9701 20.7815 21.3134Z"
      fill="black"
    />
  </svg>
)

export default Logo
