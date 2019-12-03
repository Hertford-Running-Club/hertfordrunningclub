import { Link } from "gatsby"
import React from "react"
import { useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Styles from "./header.module.scss";

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
      <Link to="/">
        <Img className={Styles.logo} fluid={companyLogo.fluid} alt={companyLogo.description} />
        </Link>
        <h1>
          {siteName}
        </h1>
    </header>
  )
}

export default Header
