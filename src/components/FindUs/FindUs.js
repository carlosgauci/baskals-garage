import React from "react"
import { useInView } from "react-intersection-observer"
import GoogleMaps from "../GoogleMaps/GoogleMaps"
import { findUs, map } from "./FindUs.module.scss"

const FindUs = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "300px",
    triggerOnce: true,
  })
  return (
    <section className={findUs} ref={ref}>
      <h4>Get Directions</h4>
      <div className={map}>{inView && <GoogleMaps />}</div>
    </section>
  )
}

export default FindUs
