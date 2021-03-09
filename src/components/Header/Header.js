import React from "react"
import { header, logo, clippedBG, navIcon } from "./Header.module.scss"
import { Logo, NavIcon } from "../../images/svg"

const Header = ({ navOpen, setNavOpen }) => (
  <header className={header}>
    <div className={clippedBG} />
    <section className={logo}>
      <Logo />
    </section>
    <div className={navIcon} onClick={() => setNavOpen(!navOpen)}>
      <NavIcon />
    </div>
  </header>
)

export default Header
