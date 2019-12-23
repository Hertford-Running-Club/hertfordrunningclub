import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Styles from './Introduction.module.scss'

const Introduction = () => {

    const data = useStaticQuery(graphql`
    {
        allContentfulHomepageTextBlock1 {
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

      const { title, text } = data.allContentfulHomepageTextBlock1.nodes[0]

    return (
<section className={Styles.introduction}>
<h2>{title}</h2>
<div dangerouslySetInnerHTML={{__html:text.childMarkdownRemark.html}}/>

</section>
    )
}


export default Introduction
