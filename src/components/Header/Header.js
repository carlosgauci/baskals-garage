import React from "react"
import NavLinks from "../../data/navlinks"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { Logo, NavIcon } from "../../images/svg"
import {
  header,
  logo,
  clippedBg,
  navIcon,
  desktopNav,
  freeQuote,
  clippedBgDark,
  desktopNavDark,
} from "./Header.module.scss"

const Header = ({ navOpen, setNavOpen, location }) => {
  return (
    <header className={header}>
      {/* Show a light colored header on the index page, and a dark one on other pages */}
      <div
        className={`${clippedBg} ${location.pathname !== "/" && clippedBgDark}`}
      />

      <section className={logo}>
        <Logo />
      </section>

      {/* Nav icon to open & close mobile navigation */}
      <div
        className={navIcon}
        onClick={() => setNavOpen(!navOpen)}
        onKeyDown={() => setNavOpen(!navOpen)}
        role="button"
        aria-label="Open Navigation Menu"
        tabIndex={0}
      >
        <NavIcon />
      </div>

      {/* Show a dark text desktop nav on the index page, and a light one on other pages */}
      <section
        className={`${desktopNav} ${
          location.pathname !== "/" && desktopNavDark
        }`}
      >
        <NavLinks />
      </section>

      {/* Get free quote button anchored to contact form */}
      <AnchorLink to="/#contact" className={freeQuote}>
        <button>Get A Free Quote</button>
      </AnchorLink>
    </header>
  )
}

export default Header
