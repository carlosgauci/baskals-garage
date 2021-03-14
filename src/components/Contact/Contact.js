// Contact Us section in the footer

import React from "react"
import { LocationPin, Mail, Phone, Clock, Facebook } from "../../images/svg"
import { list, svg } from "./Contact.module.scss"

const Contact = () => {
  return (
    <section>
      <h4>Contact Us</h4>
      <ul className={list}>
        <li>
          <div className={svg}>
            <LocationPin />
          </div>
          <p>
            Baskal's Garage, Triq Il-Provigarju,
            <br />
            Għajnsielem, Gozo
          </p>
        </li>
        <li>
          <div className={svg}>
            <Clock />
          </div>
          <p>Mon - Sat, 7AM - 8PM</p>
        </li>
        <li>
          <div className={svg}>
            <Phone />
          </div>
          <p>+356 2155 1154 / 7755 1154 </p>
        </li>
        <li>
          <div className={svg}>
            <Mail />
          </div>
          <p>baskal@baskalsgarage.com</p>
        </li>
        <li>
          <div className={svg}>
            <Facebook />
          </div>
          <p>fb.me/baskalsgarage</p>
        </li>
      </ul>
    </section>
  )
}

export default Contact
