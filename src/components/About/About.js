import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import {
  titleContainer,
  titleChildren,
  underlineVariants,
  gridVariants,
} from "../../framer/variants"
import {
  about,
  text,
  aboutImg,
  imageTwo,
  overlay,
  textSection,
  underline,
} from "./About.module.scss"

const About = () => {
  const { imgTwo, imgTwoLarge } = useStaticQuery(query)

  const aboutImages = withArtDirection(getImage(imgTwo), [
    {
      media: "(min-width: 768px)",
      image: getImage(imgTwoLarge),
    },
  ])

  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "0px",
    triggerOnce: true,
  })

  return (
    <>
      <section className={about} id="about" ref={ref}>
        <section className={textSection}>
          <div className={text}>
            <motion.h2
              ref={ref}
              variants={titleContainer}
              initial="initial"
              animate={inView && "animate"}
            >
              <motion.span variants={titleChildren}>About </motion.span>
              <motion.span variants={titleChildren}>Us</motion.span>
              <motion.span
                className={underline}
                variants={underlineVariants}
              ></motion.span>
            </motion.h2>
            <motion.p
              variants={gridVariants}
              initial="initial"
              animate={inView && "animateText"}
            >
              From a young age Baskal Farrugia had a passion for fixing cars and
              mechanical equipment, and in 1972 he decided to open his first
              Garage in the Gozitan village of Zebbug. After years of hard work
              and success he moved to a bigger garage in Ghajnsielem, where his
              sons eventually joined him in the business and are still operating
              today.
            </motion.p>
            <motion.p
              variants={gridVariants}
              initial="initial"
              animate={inView && "animateText"}
            >
              Baskal's Garage is built on the principles of honesty, integrity
              and ongoing trust based relationships. Our work reflects our pride
              in good workmanship and we're committed to providing our customers
              with a friendly, honest and reliable experience.
            </motion.p>
          </div>
        </section>
        <section className={aboutImg}>
          <GatsbyImage
            image={aboutImages}
            alt="A mechanic"
            loading="lazy"
            className={imageTwo}
            style={{ position: "absolute" }}
            backgroundColor="#000"
          />
          <div className={overlay}></div>
        </section>
      </section>
    </>
  )
}

const query = graphql`
  {
    imgTwo: file(relativePath: { eq: "about-2.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          formats: [AUTO, WEBP, AVIF]
          layout: FULL_WIDTH
          placeholder: BLURRED
          quality: 80
        )
      }
    }

    imgTwoLarge: file(relativePath: { eq: "about-2-lg.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          formats: [AUTO, WEBP, AVIF]
          layout: FULL_WIDTH
          placeholder: BLURRED
          quality: 80
        )
      }
    }
  }
`

export default About
