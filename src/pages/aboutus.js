import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Styles from "../genericPage.module.scss"
import AboutStyles from "./pageStyles/aboutus.module.scss"



const AboutUs = () => {
  
  const data = useStaticQuery(graphql`
  {
    allContentfulAboutUsPage {
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
          logos{
            id
            fixed (height:40){
              ...GatsbyContentfulFixed
            }
            description
          }
        }
        
      }
    }
  }
`)

const { title, content, metaTitle, metaDescription, logos } = data.allContentfulAboutUsPage.edges[0].node


return(
  <Layout>
    <SEO title={metaTitle} description={metaDescription}  />
    <section className={Styles.pagecontainer}>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{__html:content.childMarkdownRemark.html}}/>
      <div className={AboutStyles.logos} style={{display: "flex"}}>
      {logos.map((logo)=> (<Img className={AboutStyles.logo} key={logo.id} fixed={logo.fixed} alt={logo.description} />))}
      </div>
      {console.log(logos)}
    </section>
  </Layout>
)
}
export default AboutUs
