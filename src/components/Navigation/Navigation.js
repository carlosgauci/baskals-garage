import React from "react"
import { Logo, Back } from "../../images/svg"
import Navlinks from "../../data/navlinks"
import { nav, container, logo, links, back } from "./Navigation.module.scss"

const Navigation = ({ setNavOpen }) => {
  return (
    <nav className={nav}>
      <section className={container}>
        <div className={logo}>
          <Logo />
        </div>
        <div className={links}>
          <Navlinks setNavOpen={setNavOpen} />
        </div>
      </section>
      <span
        className={back}
        onClick={() => setNavOpen(false)}
        onKeyDown={() => setNavOpen(false)}
        role="button"
        tabIndex={0}
      >
        <Back />
      </span>
    </nav>
  )
}

export default Navigation
