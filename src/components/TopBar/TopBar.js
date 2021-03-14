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
      <div
        className={`${container} ${location.pathname !== "/" && containerDark}`}
      >
        <section className={phone}>
          <div className={svg}>
            <Phone />
          </div>
          <p>+356 2155 1154 / 7755 1154</p>
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
          <p>Triq Il-Provigarju, Għajnsielem, Gozo</p>
        </section>
      </div>
    </section>
  )
}

export default TopBar
