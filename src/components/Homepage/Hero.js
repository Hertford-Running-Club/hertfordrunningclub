import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import Styles from "./Hero.module.scss"
import Slider from "react-slick"
import "./Herooverride.scss"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default () => {

  const data = useStaticQuery(graphql`
    {
      allContentfulHomepageHero {
        edges {
          node {
            id
            images{
              id
              fluid (maxWidth:1300){
                ...GatsbyContentfulFluid
              }
              description
            }
           
          }
        }
      }
    }
  `)

  const {
    images
  } = data.allContentfulHomepageHero.edges[0].node

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000
  }

  return (
    <section className={Styles.hero}>
     <Slider {...settings}>
                    
      
      {images.map(image => {
        return <Img className="gatsbyimageoverride" key={image.id} fluid={image.fluid} alt={image.description} />
      })}
  
      </Slider>
      
    </section>
  )
}
