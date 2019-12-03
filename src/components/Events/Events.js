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

  const dataArray = data.allContentfulEvents.edges.map((event) => {
      console.log(event)
  })


  return (
    <section className={Styles.events}>
      <h2>Upcoming Events</h2>
    </section>
  )
}

export default Events
