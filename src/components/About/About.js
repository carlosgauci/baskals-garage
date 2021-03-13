import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image"
import {
  about,
  text,
  aboutImg,
  imageTwo,
  overlay,
  textSection,
} from "./About.module.scss"

const About = () => {
  const { imgTwo, imgTwoLarge } = useStaticQuery(query)

  const aboutImages = withArtDirection(getImage(imgTwo), [
    {
      media: "(min-width: 768px)",
      image: getImage(imgTwoLarge),
    },
  ])

  return (
    <>
      <section className={about} id="about">
        <section className={textSection}>
          <div className={text}>
            <h2>About Us</h2>
            <p>
              From a young age Baskal Farrugia had a passion for fixing cars and
              mechanical equipment, and in 1972 he decided to open his first
              Garage in the Gozitan village of Zebbug. After years of hard work
              and success he moved to a bigger garage in Ghajnsielem, where his
              sons eventually joined him in the business and are still operating
              today.
            </p>
            <p>
              Baskal's Garage is built on the principles of honesty, integrity
              and ongoing trust based relationships. Our work reflects our pride
              in good workmanship and we're committed to providing our customers
              with a friendly, honest and reliable experience.
            </p>
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
