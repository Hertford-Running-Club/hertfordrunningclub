import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Homepage/Hero"
import Introduction from "../components/Homepage/Introduction"
// import EventsFeed from '../components/Events/EventCarouselFeed/EventsFeed'
import ClubInfo from "../components/Homepage/ClubInfo"
import Social from "../components/Homepage/Social"
import ContactForm from "../components/ContactForm/ContactForm"
import StravaClubActivity from '../components/Strava/StravaClubActivity'
import StravaRecentActivity from '../components/Strava/StravaRecentActivity'
import InstagramFeed from "../components/Instagram/InstagramFeed"

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
    <hr style={{background: "#f1c753", height: "12px"}}/>
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <Introduction />
      <hr style={{background: "#4f6752", height: "12px"}}/>
      {/* <EventsFeed /> */}
      <ClubInfo />
      <hr style={{background: "#f1c753", height: "12px"}}/> 
      <StravaClubActivity />
      <StravaRecentActivity />
      <hr style={{background: "#4f6752", height: "12px"}}/> 
      <Social />
      <hr style={{background: "#f1c753", height: "12px"}}/> 
      <InstagramFeed loadUserData={true} NumberPhotosToLoad={11} accessToken={`${process.env.GATSBY_INSTAGRAM_ACCESS_TOKEN}`} />
      <hr style={{background: "#4f6752", height: "12px"}}/> 

    </div>
    <ContactForm />
  </Layout>
)
}
export default IndexPage
