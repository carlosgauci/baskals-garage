import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import {
  about,
  image,
  text,
  aboutImg,
  imageTwo,
  overlay,
} from "./About.module.scss"

const About = () => {
  return (
    <>
      <section className={about}>
        <StaticImage
          src="../../images/about.jpg"
          alt="A car engine"
          layout="fullWidth"
          loading="lazy"
          formats={["AUTO", "WEBP", "AVIF"]}
          style={{ position: "absolute" }}
          backgroundColor="#111111"
          placeholder="dominantColor"
          className={image}
        />
        <section className={text}>
          <h2>About Us</h2>
          <p>
            We're proud to say we've been serving our local community since
            1972. Baskal's Garage is built on the principles of honesty,
            integrity and ongoing trust based relationships.
          </p>
          <p>
            Our work reflects our pride in good workmanship and we're committed
            to providing our customers with a friendly, honest and reliable
            experience.
          </p>
        </section>
      </section>
      <section className={aboutImg}>
        <StaticImage
          src="../../images/about-2.jpg"
          alt="Baskal"
          layout="fullWidth"
          loading="lazy"
          formats={["AUTO", "WEBP", "AVIF"]}
          backgroundColor="#111111"
          placeholder="dominantColor"
          className={imageTwo}
        />
        <div className={overlay}></div>
      </section>
    </>
  )
}

export default About
