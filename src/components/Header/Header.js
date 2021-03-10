import React from "react"
import NavLinks from "../../data/navlinks"
import { Logo, NavIcon, Back } from "../../images/svg"
import {
  header,
  logo,
  clippedBG,
  navIcon,
  desktopNav,
  freeQuote,
} from "./Header.module.scss"

const Header = ({ navOpen, setNavOpen }) => {
  return (
    <header className={header}>
      <div className={clippedBG} />
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

      <section className={desktopNav}>
        <NavLinks />
      </section>

      <button className={freeQuote}>
        Get Free Quote
        <div>
          <Back />
        </div>
      </button>
    </header>
  )
}

export default Header
