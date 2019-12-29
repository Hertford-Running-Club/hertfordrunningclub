import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Homepage/Hero"
import Introduction from "../components/Homepage/Introduction"
import EventsFeed from '../components/Events/EventCarouselFeed/EventsFeed'
import ClubInfo from "../components/Homepage/ClubInfo"
import Social from "../components/Homepage/Social"
import ContactForm from "../components/ContactForm/ContactForm"
import StravaClubActivity from '../components/Strava/StravaClubActivity'
import StravaRecentActivity from '../components/Strava/StravaRecentActivity'

const IndexPage = () => {

  const data = useStaticQuery(graphql`
    {
      allContentfulGeneralInformation {
        edges {
          node {
            metaDescription
          }
        }
      }
    }
  `)

  const { metaDescription } = data.allContentfulGeneralInformation.edges[0].node

return(
  <Layout>
    <SEO
      title="Home"
      description={metaDescription}
    />
    <Hero />
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <Introduction />
      <EventsFeed />
      <ClubInfo />
      <StravaClubActivity />
      <StravaRecentActivity />
      <Social />

    </div>
    <ContactForm />
  </Layout>
)
}
export default IndexPage
