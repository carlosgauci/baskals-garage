// Top Bar on top of the header with contact info, hidden under 1024px

import React from "react"
import { LocationPin, Phone, Clock } from "../../images/svg"
import {
  topbar,
  container,
  phone,
  hours,
  address,
  svg,
  containerDark,
} from "./TopBar.module.scss"

const TopBar = ({ location }) => {
  return (
    <section className={topbar}>
      {/* Add a second class to topbar if not on index page */}
      <div
        className={`${container} ${location.pathname !== "/" && containerDark}`}
      >
        <section className={phone}>
          <div className={svg}>
            <Phone />
          </div>
          <p>
            <a href="tel:+35621551154">+356 2155 1154</a> /{" "}
            <a href="tel:+35677551154">+356 7755 1154</a>
          </p>
        </section>
        <section className={hours}>
          <div className={svg}>
            <Clock />
          </div>
          <p>Mon - Sat, 7AM - 8PM</p>
        </section>
        <section className={address}>
          <div className={svg}>
            <LocationPin />
          </div>
          <p>
            <a
              href="https://g.page/baskals-garage"
              target="_blank"
              rel="noopener noreferrer"
            >
              Triq Il-Provigarju, Għajnsielem, Gozo
            </a>
          </p>
        </section>
      </div>
    </section>
  )
}

export default TopBar
