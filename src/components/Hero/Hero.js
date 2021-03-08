import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { hero, image, text, container, buttons } from "./Hero.module.scss"

const Hero = () => {
  return (
    <section className={hero}>
      <StaticImage
        src="../../images/hero.jpg"
        alt="Mechanic fixing a vehicle"
        layout="fullWidth"
        loading="eager"
        formats={["AUTO", "WEBP", "AVIF"]}
        style={{ position: "absolute" }}
        className={image}
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
            <button>Our Services</button>
            <button>Contact Us</button>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Hero
