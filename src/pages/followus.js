import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import Styles from "../genericPage.module.scss"

const FollowUs = () => {
    
  const data = useStaticQuery(graphql`
  {
    allContentfulFollowUs {
      edges{
        node{
          title
          images{
            id
            fluid{
              ...GatsbyContentfulFluid
            }
            description
          }
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

const { title, images, content, metaTitle, metaDescription } = data.allContentfulFollowUs.edges[0].node



return (
  <Layout>
    <SEO title={metaTitle} description={metaDescription}  />
    <section className={Styles.pagecontainer}>
      <h1>{title}</h1>
      {/* {images.map(image => {
        return <Img id={image.id} fluid={image.fluid} alt={image.description} />
      })} */}
      <div dangerouslySetInnerHTML={{__html:content.childMarkdownRemark.html}}/>
    </section>
  </Layout>
)
}

export default FollowUs
