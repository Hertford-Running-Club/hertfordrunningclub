import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section style={{textAlign:"center", padding:"2em"}}>
    <h1>Opps Page NOT FOUND</h1>
    <p>The Page is either missing or does not exist</p>
    <Link to="/"><button>Return To Homepage</button></Link>
    </section>
  </Layout>
)

export default NotFoundPage
