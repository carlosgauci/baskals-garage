import React from "react"
import Contact from "../Contact/Contact"
import FindUs from "../FindUs/FindUs"
import NavLinks from "../../data/navlinks"
import { footer, container } from "./Footer.module.scss"

const Footer = () => {
  return (
    <footer className={footer}>
      <section className={container}>
        <Contact />
        <FindUs />
        <nav>
          <h4>Navigate</h4>
          <NavLinks />
        </nav>
      </section>
    </footer>
  )
}

export default Footer
