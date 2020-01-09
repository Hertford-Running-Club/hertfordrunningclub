import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import Styles from "./Hero.module.scss"

export default () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulHomepageHero {
        edges {
          node {
            id
            image {
              description
              fluid {
                ...GatsbyContentfulFluid
              }
            }
            title
            subtitle
          }
        }
      }
    }
  `)

  const {
    image,
    title,
    subtitle,
  } = data.allContentfulHomepageHero.edges[0].node

  return (
    <section className={Styles.hero}>
      <Img className={Styles.image} fluid={image.fluid} />
      <div className={Styles.copycontainer}>
        <h1 className={Styles.title}>{title}</h1>
        <p className={Styles.subtitle}>{subtitle}</p>
      </div>
    </section>
  )
}
