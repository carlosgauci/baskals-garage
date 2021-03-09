import React from "react"
import ContactForm from "../ContactForm/ContactForm"
import { data } from "../../data/experience"
import {
  experience,
  colorText,
  grid,
  single,
  svg,
  title,
} from "./Experience.module.scss"

const Experience = () => {
  return (
    <section className={experience}>
      <h2 className={title}>
        <span className={colorText}>Why </span>Choose Us
      </h2>
      <section className={grid}>
        {data.map(item => {
          return (
            <article key={item.id} className={single}>
              <div className={svg}>
                <item.icon />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          )
        })}
      </section>
      <ContactForm />
    </section>
  )
}

export default Experience
