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

  <h1 className={Styles.title}>{title}</h1>
  <div dangerouslySetInnerHTML={{__html:text.childMarkdownRemark.html}}/>

  </section>
)
}

export default Social
