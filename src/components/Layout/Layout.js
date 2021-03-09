import React, { useState } from "react"
import Header from "../Header/Header"
import Navigation from "../Navigation/Navigation"
import Footer from "../Footer/Footer"

const Layout = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <>
      <Header navOpen={navOpen} setNavOpen={setNavOpen} />
      {navOpen && <Navigation setNavOpen={setNavOpen} />}
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
