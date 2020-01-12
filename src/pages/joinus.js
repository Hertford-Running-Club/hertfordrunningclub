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
    allContentfulGeneralInformation {
        edges{
          node {
            membershipForm{
              file {
                url
              }
            }
          }
        }
      }
  }
`)

const { title, content, metaTitle, metaDescription } = data.allContentfulJoinUsPage.edges[0].node
const { membershipForm } = data.allContentfulGeneralInformation.edges[0].node


return (
  <Layout>
   <SEO title={metaTitle} description={metaDescription}  />
    <section className={Styles.pagecontainer}>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{__html:content.childMarkdownRemark.html}}/>
      <a href={membershipForm.file.url} target="_blank"><button className={Styles.primarybtn}>Download Form</button></a>
    </section>
  </Layout>
)
}

export default JoinUs
