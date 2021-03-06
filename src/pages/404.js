import React from "react"
import SEO from "../components/SEO/SEO"
import NotFound from "../components/NotFound/NotFound"

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" index="noindex" />
    <NotFound />
  </>
)

export default NotFoundPage
