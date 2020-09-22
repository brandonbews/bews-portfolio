import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDribbble,
  faGithub,
  faCodepen,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__social">
        <ul className="social-list">
          <li className="social-list__item">
            <a href="https://github.com/brandonbews">
              <FontAwesomeIcon icon={faGithub} alt="Github" />
            </a>
          </li>
          <li className="social-list__item">
            <a href="https://codepen.io/brandonbews">
              <FontAwesomeIcon icon={faCodepen} alt="Codepen" />
            </a>
          </li>
          <li className="social-list__item">
            <a href="https://dribbble.com/brandonbews">
              <FontAwesomeIcon icon={faDribbble} alt="Dribbble" />
            </a>
          </li>
          <li className="social-list__item">
            <a href="https://twitter.com/brandonbews">
              <FontAwesomeIcon icon={faTwitter} alt="Twitter" />
            </a>
          </li>
          <li className="social-list__item">
            <a href="https://www.linkedin.com/in/brandonbews/">
              <FontAwesomeIcon icon={faLinkedin} alt="LinkedIn" />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__copyright">&copy; {new Date().getFullYear()}, Brandon Bews</div>
    </footer>
  )
}

export default Footer
