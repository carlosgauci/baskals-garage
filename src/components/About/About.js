import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image"
import {
  about,
  image,
  text,
  aboutImg,
  imageTwo,
  overlay,
  textSection,
} from "./About.module.scss"

const About = () => {
  const { imgOne, imgOneLarge, imgTwo, imgTwoLarge } = useStaticQuery(query)

  const textImages = withArtDirection(getImage(imgOne), [
    {
      media: "(min-width: 768px)",
      image: getImage(imgOneLarge),
    },
  ])

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
          <GatsbyImage
            image={textImages}
            alt="A car engine"
            loading="lazy"
            className={image}
            style={{ position: "absolute" }}
            backgroundColor="#000"
          />
          <div className={text}>
            <h2>About Us</h2>
            <p>
              We're proud to say we've been serving our local community since
              1972. Baskal's Garage is built on the principles of honesty,
              integrity and ongoing trust based relationships.
            </p>
            <p>
              Our work reflects our pride in good workmanship and we're
              committed to providing our customers with a friendly, honest and
              reliable experience.
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
    imgOne: file(relativePath: { eq: "about.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          formats: [AUTO, WEBP, AVIF]
          layout: FULL_WIDTH
          placeholder: BLURRED
        )
      }
    }

    imgOneLarge: file(relativePath: { eq: "about-lg.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          formats: [AUTO, WEBP, AVIF]
          layout: FULL_WIDTH
          placeholder: BLURRED
        )
      }
    }

    imgTwo: file(relativePath: { eq: "about-2.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          formats: [AUTO, WEBP, AVIF]
          layout: FULL_WIDTH
          placeholder: BLURRED
        )
      }
    }

    imgTwoLarge: file(relativePath: { eq: "about-2-lg.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          formats: [AUTO, WEBP, AVIF]
          layout: FULL_WIDTH
          placeholder: BLURRED
        )
      }
    }
  }
`

export default About
