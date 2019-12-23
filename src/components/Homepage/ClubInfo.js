import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Styles from './ClubInfo.module.scss'

const ClubInfo = () => {


    const data = useStaticQuery(graphql`
    {
        allContentfulHomepageTextBlock2 {
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

      const { title, text } = data.allContentfulHomepageTextBlock2.nodes[0]

    return (
<section className={Styles.clubinfo}>
<h2>{title}</h2>
<div dangerouslySetInnerHTML={{__html:text.childMarkdownRemark.html}}/>

</section>
    )

}

export default ClubInfo
