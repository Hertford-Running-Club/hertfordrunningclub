import { Link } from "gatsby"
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Styles from "./header.module.scss";
import Navigation from "../Navigation/Nav";

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulGeneralInformation {
        edges {
          node {
            id
            siteName
            companyLogo {
              fluid {
                ...GatsbyContentfulFluid
              }
              description
            }
          }
        }
      }
    }
  `)

  // Destructing Object
  const {
    siteName,
    companyLogo,
  } = data.allContentfulGeneralInformation.edges[0].node

  return (
    <header className={Styles.header}>
      <div className={Styles.nav}>
        <Navigation />
      </div>
      <div className={Styles.branding}>
        <Link to="/">
          <Img className={Styles.logo} fluid={companyLogo.fluid} alt={companyLogo.description} />
        </Link>
        <h1>
          {siteName}
        </h1>
      </div>
    </header>
  )
}

export default Header
