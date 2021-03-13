import React from "react"
import { motion } from "framer-motion"
import {
  titleContainer,
  titleChildren,
  gridVariants,
} from "../../framer/variants"
import { InView } from "react-intersection-observer"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { data } from "../../data/services"
import { services, svg, grid, single, colorText } from "./Services.module.scss"

const Services = () => {
  return (
    <section className={services} id="services">
      <InView threshold={0.25} triggerOnce={true}>
        {({ ref, inView }) => (
          <motion.h2
            ref={ref}
            variants={titleContainer}
            initial="initial"
            animate={inView && "animate"}
          >
            <motion.span className={colorText} variants={titleChildren}>
              What{" "}
            </motion.span>
            <motion.span variants={titleChildren}>We </motion.span>
            <motion.span variants={titleChildren}>Do</motion.span>
          </motion.h2>
        )}
      </InView>
      <InView threshold={0} triggerOnce={true}>
        {({ ref, inView }) => (
          <motion.section
            className={grid}
            ref={ref}
            variants={titleContainer}
            initial="initial"
            animate={inView && "animate"}
            transition={{ staggerChildren: 0.15 }}
          >
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
                </motion.article>
              )
            })}
          </motion.section>
        )}
      </InView>
      <AnchorLink to="/#contact">
        <button>Contact Us</button>
      </AnchorLink>
    </section>
  )
}

export default Services
