/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Querying contentful nodes to dynamically create pages. 
  const result = await graphql(
    `
    {
        allContentfulEvents {
          edges {
            node {
              id
            }
          }
        }
        allContentfulRecurringEvents {
          edges {
            node {
              id
            }
          }
        }
      }
    `
  )

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }


const EventTemplate = path.resolve(
    `src/components/Events/EventPageTemplate.js`
  )
  // Create pages for each Contentful Recurring Events
  result.data.allContentfulRecurringEvents.edges.forEach(({ node }) => {
    
    const path = `events/${node.id.substr(0, 8)}`
    createPage({
      path,
      component: EventTemplate,
      // In your template's graphql query, you can use path
      // as a GraphQL variable to query for data from the markdown file.
      context: {
        eventid: node.id,
      },
    })
  })

  result.data.allContentfulEvents.edges.forEach(({ node }) => {
    
    const path = `events/${node.id.substr(0, 8)}`
    createPage({
      path,
      component: EventTemplate,
      // In your template's graphql query, you can use path
      // as a GraphQL variable to query for data from the markdown file.
      context: {
        eventid: node.id,
      },
    })
  })


}