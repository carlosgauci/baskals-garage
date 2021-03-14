import React from "react"
import { Link } from "gatsby"
import { container } from "./NotFound.module.scss"

const NotFound = () => {
  return (
    <section className={container}>
      <h2>404: Not Found</h2>
      <p>You just hit a route that doesn't exist :(</p>
      <Link to="/">
        <button>Go back</button>
      </Link>
    </section>
  )
}

export default NotFound
