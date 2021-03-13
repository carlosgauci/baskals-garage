import React, { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import TopBar from "../TopBar/TopBar"
import Header from "../Header/Header"
import Navigation from "../Navigation/Navigation"
import Footer from "../Footer/Footer"

const Layout = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false)

  // Disable scrolling when nav is open
  let html
  if (typeof document !== "undefined") {
    html = document.querySelector("html")
  }
  useEffect(() => {
    navOpen
      ? (html.style.overflow = "hidden")
      : (html.style.overflow = "visible")
  }, [navOpen])

  return (
    <>
      <AnimatePresence>
        {navOpen && <Navigation setNavOpen={setNavOpen} />}
      </AnimatePresence>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <TopBar />
        <Header navOpen={navOpen} setNavOpen={setNavOpen} />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
