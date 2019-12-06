import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Homepage/Hero"
import Introduction from "../components/Homepage/Introduction"
import EventsFeed from '../components/Events/EventsFeed'
import ClubInfo from "../components/Homepage/ClubInfo"
import Social from "../components/Homepage/Social"
import ContactForm from "../components/ContactForm/ContactForm"
import StravaClubActivity from '../components/Strava/StravaClubActivity'
import StravaRecentActivity from '../components/Strava/StravaRecentActivity'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      description="A very friendly, relaxed and welcoming community of runners; from Couch to 5k graduates to experienced runners."
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
    <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />

  </Layout>
)

export default IndexPage
