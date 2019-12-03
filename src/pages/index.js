import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Homepage/Hero"
import Introduction from "../components/Homepage/Introduction"
import ClubInfo from "../components/Homepage/ClubInfo"
import Social from "../components/Homepage/Social"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" description="A very friendly, relaxed and welcoming community of runners; from Couch to 5k graduates to experienced runners." />
    <Hero />
    <Introduction />
    <ClubInfo />
    <Social />
    

  </Layout>
)

export default IndexPage
