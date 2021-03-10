import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { data } from "../../data/services"
import { services, svg, grid, single, colorText } from "./Services.module.scss"

const Services = () => {
  return (
    <section className={services} id="services">
      <h2>
        <span className={colorText}>What </span>We Do
      </h2>
      <section className={grid}>
        {data.map(service => {
          return (
            <article key={service.id} className={single}>
              <div className={svg}>
                <service.icon />
              </div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          )
        })}
      </section>
      <AnchorLink to="/#contact">
        <button>Contact Us</button>
      </AnchorLink>
    </section>
  )
}

export default Services
