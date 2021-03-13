import React from "react"
import { motion } from "framer-motion"
import {
  titleContainer,
  titleChildren,
  sideVariants,
  underlineSingle,
} from "../../framer/variants"
import { InView } from "react-intersection-observer"
import ContactForm from "../ContactForm/ContactForm"
import { data } from "../../data/experience"
import {
  experience,
  colorText,
  grid,
  single,
  svg,
  title,
  underline,
} from "./Experience.module.scss"

const Experience = () => {
  return (
    <section className={experience}>
      <InView threshold={0.25} triggerOnce={true}>
        {({ ref, inView }) => (
          <motion.h2
            className={title}
            ref={ref}
            variants={titleContainer}
            initial="initial"
            animate={inView && "animate"}
          >
            <motion.span className={colorText} variants={titleChildren}>
              <motion.span
                className={underline}
                variants={underlineSingle}
              ></motion.span>
              Why{" "}
            </motion.span>
            <motion.span variants={titleChildren}>Choose </motion.span>
            <motion.span variants={titleChildren}>Us</motion.span>
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
            {data.map(item => {
              return (
                <motion.article
                  key={item.id}
                  className={single}
                  variants={sideVariants}
                >
                  <div className={svg}>
                    <item.icon />
                  </div>
                  <section>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </section>
                </motion.article>
              )
            })}
          </motion.section>
        )}
      </InView>
      <ContactForm />
    </section>
  )
}

export default Experience
