// Mobile navigation (animates in from the right side)

import React from "react"
import { motion } from "framer-motion"
import { navVariants, navItemVariants } from "../../framer/variants"
import { Logo, Back } from "../../images/svg"
import Navlinks from "../../data/navlinks"
import { nav, container, logo, links, back } from "./Navigation.module.scss"

const Navigation = ({ setNavOpen }) => {
  return (
    <motion.nav
      className={nav}
      variants={navVariants}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <section className={container}>
        <motion.div
          className={logo}
          variants={navItemVariants}
          initial="hiddenLogo"
          animate="showLogo"
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Logo />
        </motion.div>

        <nav className={links}>
          <Navlinks setNavOpen={setNavOpen} mobile={true} />
        </nav>
      </section>

      {/* Close nav button */}
      <span
        className={back}
        onClick={() => setNavOpen(false)}
        onKeyDown={() => setNavOpen(false)}
        role="button"
        tabIndex={0}
      >
        <Back />
      </span>
    </motion.nav>
  )
}

export default Navigation
