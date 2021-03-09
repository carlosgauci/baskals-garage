import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { Link } from "gatsby"

const navlinks = ({ setNavOpen }) => {
  return (
    <ul>
      <li>
        <Link to="/" onClick={() => setNavOpen(false)}>
          Home
        </Link>
      </li>
      <li>
        <AnchorLink to="/#services" onAnchorLinkClick={() => setNavOpen(false)}>
          Services
        </AnchorLink>
      </li>
      <li>
        <Link to="/shop" onClick={() => setNavOpen(false)}>
          Shop
        </Link>
      </li>
      <li>
        <AnchorLink to="/#about" onAnchorLinkClick={() => setNavOpen(false)}>
          About Us
        </AnchorLink>
      </li>
      <li>
        <AnchorLink to="/#contact" onAnchorLinkClick={() => setNavOpen(false)}>
          Contact
        </AnchorLink>
      </li>
    </ul>
  )
}

export default navlinks
