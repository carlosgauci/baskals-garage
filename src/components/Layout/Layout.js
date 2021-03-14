import React, { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import TopBar from "../TopBar/TopBar"
import Header from "../Header/Header"
import Navigation from "../Navigation/Navigation"
import Footer from "../Footer/Footer"

const Layout = ({ children, location }) => {
  // State for opening and closing mobile navigation
  const [navOpen, setNavOpen] = useState(false)

  // Disable scrolling when mobile nav is open
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
      {/* AnimatePresence to animate mobile navigation in and out */}
      <AnimatePresence>
        {navOpen && <Navigation setNavOpen={setNavOpen} />}
      </AnimatePresence>

      {/* Container div set to flex-col and <main> set to flex:1, to achieve 100vh even on short pages like cart or 404 (without google chrome topbar ruining our experience) */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        {/* Pass location to TopBar & Header to change their styling depending on page */}
        {/* TopBar hidden under 1024px */}
        <TopBar location={location} />
        <Header navOpen={navOpen} setNavOpen={setNavOpen} location={location} />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
