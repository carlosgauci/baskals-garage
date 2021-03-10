import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image"
import {
  hero,
  image,
  text,
  container,
  buttons,
  servicesBtn,
  contactBtn,
} from "./Hero.module.scss"

const Hero = () => {
  const { small, large } = useStaticQuery(query)
  const heroSmall = getImage(small)
  const heroLarge = getImage(large)
  const images = withArtDirection(heroSmall, [
    {
      media: "(min-width: 768px)",
      image: heroLarge,
    },
  ])

  return (
    <section className={hero}>
      <GatsbyImage
        image={images}
        alt="Mechanic fixing a vehicle"
        loading="eager"
        className={image}
        style={{ position: "absolute" }}
      />
      <div className={container}>
        <section className={text}>
          <h1>Est 1972</h1>
          <p>
            Baskal's Garage is family run garage in Ghajnsielem, Gozo, offering
            mechanical repairs, vehicle servicing & more. We have been serving
            our local community with a smile for over 45 years.
          </p>
          <div className={buttons}>
            <button className={servicesBtn}>Our Services</button>
            <button className={contactBtn}>Contact Us</button>
          </div>
        </section>
      </div>
    </section>
  )
}

const query = graphql`
  {
    small: file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          formats: [AUTO, WEBP, AVIF]
          layout: FULL_WIDTH
          placeholder: BLURRED
          quality: 85
        )
      }
    }

    large: file(relativePath: { eq: "hero-lg.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          formats: [AUTO, WEBP, AVIF]
          layout: FULL_WIDTH
          placeholder: BLURRED
          quality: 85
        )
      }
    }
  }
`

export default Hero
