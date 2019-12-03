import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Strava_Logo.png" }) {
        childImageSharp {
          fixed(height: 20) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <a href="https://www.strava.com/clubs/hertfordrunningclub">
      <Img
        fixed={data.placeholderImage.childImageSharp.fixed}
        alt="Go To Strava Hertford Running Club"
      />
    </a>
  )
}
