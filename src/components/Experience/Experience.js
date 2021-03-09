import React from "react"
import { data } from "../../data/experience"
import {
  experience,
  colorText,
  grid,
  single,
  svg,
} from "./Experience.module.scss"

const Experience = () => {
  return (
    <section className={experience}>
      <h2>
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
    </section>
  )
}

export default Experience
