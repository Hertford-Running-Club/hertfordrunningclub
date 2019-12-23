import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Styles from "./Social.module.scss"
import InstagramFeed from "../Instagram/InstagramFeed"


const Social = () => {
  

  const data = useStaticQuery(graphql`
  {
      allContentfulHomepageTextBlock3 {
        nodes {
          id
          title
          text {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
`   )  

const { title, text } = data.allContentfulHomepageTextBlock3.nodes[0]
  
  return (
  <section className={Styles.social}>

  <h2>{title}</h2>
  <div dangerouslySetInnerHTML={{__html:text.childMarkdownRemark.html}}/>
    <hr />

    <InstagramFeed loadUserData={true} NumberPhotosToLoad={11} accessToken={`${process.env.GATSBY_INSTAGRAM_ACCESS_TOKEN}`} / >
  
  </section>
)
}

export default Social
