import React from "react"
import useWindowSize from "./../utils/useWindowSize"

import { AnchorLink } from "gatsby-plugin-anchor-links"
import { Link } from "gatsby"

const Navlinks = ({ setNavOpen }) => {
  const width = useWindowSize()
  const closeNav = () => {
    width < 768 && setNavOpen(false)
  }
  return (
    <ul>
      <li>
        <Link to="/" onClick={closeNav}>
          Home
        </Link>
      </li>
      <li>
        <AnchorLink to="/#services" onAnchorLinkClick={closeNav}>
          Services
        </AnchorLink>
      </li>
      <li>
        <Link to="/shop" onClick={closeNav}>
          Shop
        </Link>
      </li>
      <li>
        <AnchorLink to="/#about" onAnchorLinkClick={closeNav}>
          About Us
        </AnchorLink>
      </li>
      <li>
        <AnchorLink to="/#contact" onAnchorLinkClick={closeNav}>
          Contact
        </AnchorLink>
      </li>
    </ul>
  )
}

export default Navlinks
