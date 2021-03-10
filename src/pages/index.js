import React from "react"
import Hero from "../components/Hero/Hero"
import Services from "../components/Services/Services"
import About from "../components/About/About"
import Experience from "../components/Experience/Experience"
import SEO from "../components/SEO/SEO"

const IndexPage = () => (
  <>
    <SEO title="Baskal's Garage" />

    <Hero />
    <Services />
    <About />
    <Experience />
  </>
)

export default IndexPage
