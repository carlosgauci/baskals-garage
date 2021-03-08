import React from "react"
import { header, logo, clippedBG, navIcon } from "./Header.module.scss"
import Logo from "../../images/svg/logo.svg"
import NavIcon from "../../images/svg/nav.svg"

const Header = () => (
  <header className={header}>
    <div className={clippedBG} />
    <section className={logo}>
      <Logo />
    </section>
    <div className={navIcon}>
      <NavIcon />
    </div>
  </header>
)

export default Header
