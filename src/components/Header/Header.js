import React from "react"
import NavLinks from "../../data/navlinks"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { Logo, NavIcon, Back } from "../../images/svg"
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
      <div
        className={`${clippedBg} ${location.pathname !== "/" && clippedBgDark}`}
      />
      <section className={logo}>
        <Logo />
      </section>
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

      <section
        className={`${desktopNav} ${
          location.pathname !== "/" && desktopNavDark
        }`}
      >
        <NavLinks />
      </section>
      <AnchorLink to="/#contact" className={freeQuote}>
        <button>
          Get Free Quote
          <div>
            <Back />
          </div>
        </button>
      </AnchorLink>
    </header>
  )
}

export default Header
