import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Styles from "./Events.module.scss"



const Events = () => {

    const data = useStaticQuery(graphql`
    {
        allContentfulEvents {
          edges {
            node {
              eventType
              eventTitle
              meetUpAddress
              terrain
              eventLevel
              date(formatString: "MMMM DD")
              description {
                childMarkdownRemark {
                  html
                }
              }
            }
          }
        }
      }
      
  `)


  return (
    <section>
      <h3>Upcoming Events</h3>
    </section>
  )
}

export default Events
