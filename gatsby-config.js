// cd C/Users/Stefan\ Trinh/Development/hertfordrunningclub

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Hertford Running Club`,
    description: `Hertford Running Club is a very friendly, relaxed and welcoming community of runners; from Couch to 5k graduates to experienced runners.`,
    author: `Stefan Trinh | www.stefantrinh.com`,
    siteUrl: 'https://www.hertfordrunningclub.co.uk'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.hertfordrunningclub.co.uk',
        sitemap: 'https://www.hertfordrunningclub.co.uk/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#182d1b`,
        theme_color: `#182d1b`,
        display: `minimal-ui`,
        icon: `src/images/HRC_logo_front.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}


// Primary Green Colours   #182d1b /  #234127  / #4f6752
// SECONDARY YELLOW COLOURS #a6811c /  #eeb928   /   #f1c753
