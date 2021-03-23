// Services section (what we do) on the index page

import React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import {
  titleContainer,
  titleChildren,
  underlineSingle,
  gridVariants,
} from "../../framer/variants"
import { InView } from "react-intersection-observer"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { data } from "../../data/services"
import {
  services,
  svg,
  grid,
  single,
  colorText,
  underline,
} from "./Services.module.scss"

const Services = () => {
  return (
    <section className={services} id="services">
      {/* InView component to trigger title animation with intersection observer */}
      <InView threshold={0.25} triggerOnce={true}>
        {({ ref, inView }) => (
          <motion.h2
            ref={ref}
            variants={titleContainer}
            initial="initial"
            animate={inView && "animate"}
          >
            <motion.span className={colorText} variants={titleChildren}>
              {/* Underline span animated with framer-motion */}
              <motion.span
                className={underline}
                variants={underlineSingle}
              ></motion.span>
              What
            </motion.span>
            <motion.span variants={titleChildren}> We </motion.span>
            <motion.span variants={titleChildren}>Do</motion.span>
          </motion.h2>
        )}
      </InView>

      {/* Trigger grid animation with intersection observer */}
      <InView threshold={0.1} triggerOnce={true}>
        {({ ref, inView }) => (
          <motion.section
            className={grid}
            ref={ref}
            variants={titleContainer}
            initial="initial"
            animate={inView && "animate"}
            transition={{ staggerChildren: 0.1 }}
          >
            {/* Create individual services cards from the imported data array */}
            {data.map(service => {
              return (
                <motion.article
                  key={service.id}
                  className={single}
                  variants={gridVariants}
                >
                  <div className={svg}>
                    <service.icon />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  {service.button && <Link to="/shop">Visit shop</Link>}
                </motion.article>
              )
            })}
          </motion.section>
        )}
      </InView>

      {/* Button with anchor to contact form */}
      <AnchorLink to="/#contact">
        <button>Contact Us</button>
      </AnchorLink>
    </section>
  )
}

export default Services
