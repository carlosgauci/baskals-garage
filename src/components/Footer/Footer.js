import React from "react"
import Contact from "../Contact/Contact"
import FindUs from "../FindUs/FindUs"
import { footer, container } from "./Footer.module.scss"

const Footer = () => {
  return (
    <footer className={footer}>
      <section className={container}>
        <Contact />
        <FindUs />
      </section>
    </footer>
  )
}

export default Footer
