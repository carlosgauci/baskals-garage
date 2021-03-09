import React from "react"
import GoogleMaps from "../GoogleMaps/GoogleMaps"
import { findUs, map } from "./FindUs.module.scss"

const FindUs = () => {
  return (
    <section className={findUs}>
      <h4>Get Directions</h4>
      <div className={map}>
        <GoogleMaps />
      </div>
    </section>
  )
}

export default FindUs
