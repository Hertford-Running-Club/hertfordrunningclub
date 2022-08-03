import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "facebook.png" }) {
        childImageSharp {
            fixed (height:20) {
              
                ...GatsbyImageSharpFixed
              }
        }
      }
    }
  `)

  return (
    <a href="https://www.facebook.com/hertfordrunningclub/">
      <Img
        fixed={data.placeholderImage.childImageSharp.fixed}
        alt="Go To Hertford Running Clubs Facebook Page"
      />
    </a>
  )
}
