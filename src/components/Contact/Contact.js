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
            <a
              href="https://g.page/baskals-garage"
              target="_blank"
              rel="noopener noreferrer"
            >
              Baskal's Garage, Triq Il-Provigarju,
              <br />
              Għajnsielem, Gozo
            </a>
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
          <p>
            <a href="tel:+35621551154">+356 2155 1154</a> /{" "}
            <a href="tel:+35677551154">7755 1154</a>
          </p>
        </li>
        <li>
          <div className={svg}>
            <Mail />
          </div>
          <p>
            <a href="mailto:baskal@baskalsgarage.com">
              baskal@baskalsgarage.com
            </a>
          </p>
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
