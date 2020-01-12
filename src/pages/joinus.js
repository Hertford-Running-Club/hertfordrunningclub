import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Styles from "../genericPage.module.scss"

const JoinUs = () => {

    
  const data = useStaticQuery(graphql`
  {
    allContentfulJoinUsPage {
      edges{
        node{
          title
          content {
            childMarkdownRemark{
              html
            }
          }
          metaTitle
          metaDescription
        }
        
      }
    }
  }
`)

const { title, content, metaTitle, metaDescription } = data.allContentfulJoinUsPage.edges[0].node



return (
  <Layout>
   <SEO title={metaTitle} description={metaDescription}  />
    <section className={Styles.pagecontainer}>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{__html:content.childMarkdownRemark.html}}/>
    </section>
  </Layout>
)
}

export default JoinUs
