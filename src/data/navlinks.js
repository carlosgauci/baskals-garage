import React from "react"
import { motion } from "framer-motion"
import { navItemVariants } from "../framer/variants"
import useWindowSize from "./../utils/useWindowSize"

import { AnchorLink } from "gatsby-plugin-anchor-links"
import { Link } from "gatsby"

const Navlinks = ({ setNavOpen, animated }) => {
  const width = useWindowSize()
  const closeNav = () => {
    width < 768 && setNavOpen(false)
  }
  return (
    <ul>
      <motion.li
        variants={animated ? navItemVariants : undefined}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.4, delay: 0.6 }}
      >
        <Link to="/" onClick={closeNav}>
          Home
        </Link>
      </motion.li>
      <motion.li
        variants={animated ? navItemVariants : undefined}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.4, delay: 0.7 }}
      >
        <AnchorLink to="/#services" onAnchorLinkClick={closeNav}>
          Services
        </AnchorLink>
      </motion.li>
      <motion.li
        variants={animated ? navItemVariants : undefined}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.4, delay: 0.8 }}
      >
        <Link to="/shop" onClick={closeNav}>
          Shop
        </Link>
      </motion.li>
      <motion.li
        variants={animated ? navItemVariants : undefined}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.4, delay: 0.9 }}
      >
        <AnchorLink to="/#about" onAnchorLinkClick={closeNav}>
          About Us
        </AnchorLink>
      </motion.li>
      <motion.li
        variants={animated ? navItemVariants : undefined}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.4, delay: 1 }}
      >
        <AnchorLink to="/#contact" onAnchorLinkClick={closeNav}>
          Contact
        </AnchorLink>
      </motion.li>
    </ul>
  )
}

export default Navlinks
