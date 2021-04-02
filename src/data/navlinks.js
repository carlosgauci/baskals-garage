// Navigation links
import React from "react"
import { motion } from "framer-motion"
import { navItemVariants } from "../framer/variants"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { Link } from "gatsby"

const Navlinks = ({ setNavOpen, mobile }) => {
  return (
    <ul>
      <motion.li
        variants={mobile && navItemVariants}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.4, delay: 0.6 }}
      >
        <Link to="/" onClick={mobile ? () => setNavOpen(false) : null}>
          Home
        </Link>
      </motion.li>

      <motion.li
        variants={mobile && navItemVariants}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.4, delay: 0.7 }}
      >
        <AnchorLink
          to="/#services"
          onAnchorLinkClick={mobile ? () => setNavOpen(false) : null}
        >
          Services
        </AnchorLink>
      </motion.li>

      {/* <motion.li
        variants={mobile && navItemVariants}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.4, delay: 0.8 }}
      >
        <Link to="/shop" onClick={mobile ? () => setNavOpen(false) : null}>
          Shop
        </Link>
      </motion.li> */}

      <motion.li
        variants={mobile && navItemVariants}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.4, delay: 0.8 }}
      >
        <AnchorLink
          to="/#about"
          onAnchorLinkClick={mobile ? () => setNavOpen(false) : null}
        >
          About Us
        </AnchorLink>
      </motion.li>

      <motion.li
        variants={mobile && navItemVariants}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.4, delay: 0.9 }}
      >
        <AnchorLink
          to="/#contact"
          onAnchorLinkClick={mobile ? () => setNavOpen(false) : null}
        >
          Contact
        </AnchorLink>
      </motion.li>
    </ul>
  )
}

export default Navlinks
