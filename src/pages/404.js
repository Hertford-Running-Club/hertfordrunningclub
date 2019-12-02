import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Page NOT FOUND</h1>
    <p>The Page is either missing or does not exist</p>
    <Link to="/">Return To Homepage</Link>
  </Layout>
)

export default NotFoundPage
