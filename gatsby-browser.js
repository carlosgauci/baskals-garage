import React from "react"
import Layout from "./src/components/Layout/Layout"
import "@fontsource/poppins/400.css"
import "@fontsource/roboto/700.css"
import "./src/css/normalize.scss"
import "./src/css/global.scss"

export const wrapPageElement = ({ element, props }) => {
  return (
    <Layout {...props} location={props.location}>
      {element}
    </Layout>
  )
}
