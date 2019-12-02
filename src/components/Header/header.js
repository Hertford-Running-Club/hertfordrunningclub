import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery } from 'gatsby'
import SEO from '../seo.js';

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
  {
    allContentfulGeneralInformation {
      edges {
        node {
          id
          siteName
          metaDescription
        }
      }
    }
  }
`)


  return (
  <header>
    <div>
      <h1 style={{ margin: 0 }}>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
  </header>)
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
