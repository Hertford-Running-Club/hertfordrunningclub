/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// // You can delete this file if you're not using it
// const path = require("path")
// // Implement the Gatsby API “createPages”. This is called once the
// // data layer is bootstrapped to let plugins create pages from data.
// exports.createPages = async ({ graphql, actions, reporter }) => {
//   const { createPage } = actions

//   // Querying contentful nodes to dynamically create pages. 
//   const result = await graphql(
//     `
//     {
//       allContentfulEvents {
//         edges {
//           node {
//             id
//           }
//         }
//       }
//       allContentfulRecurringEvents {
//         edges {
//           node {
//             id
//             day
//             time
//           }
//         }
//       }
      
//         allContentfulBlogPosts {
//           edges {
//             node {
//               id
//               slug
//             }
//           }
//         }
//       } 
//     `
//   )

//   // Handle errors
//   if (result.errors) {
//     reporter.panicOnBuild(`Error while running GraphQL query.`)
//     return
//   }

//   const getDayIndex = day => {
//     // takes a day of the week as a string value and gives the index value of the day you want.
//     const days = [
//       "sunday",
//       "monday",
//       "tuesday",
//       "wednesday",
//       "thursday",
//       "friday",
//       "saturday",
//       "sunday",
//     ]
//     return days.indexOf(day)
//   }

//   const createEventDate = (day, time, daysToAdd = 0) => {
//     // given a day and time create recurring event.
//     day = day.toLowerCase()
//     const dayIndex = getDayIndex(day)
//     let eventDate = new Date() // starts with today's date
//     // sets the new date using the below formula
//     eventDate.setDate(eventDate.getDate() + ((dayIndex + 7 - eventDate.getDay()) % 7) + daysToAdd)
//     return eventDate
//   }



// const EventTemplate = path.resolve(
//     `src/components/Events/EventPageTemplate/EventPageTemplate.js`
//   )


//   // Create pages for each Contentful Recurring Events
//   // ==================================================

//   result.data.allContentfulRecurringEvents.edges.forEach(({ node }) => {

//     for (let index = 1; index < 3; index++) {
//       const path = `events/${node.id.substr(0, 8)}/week${index}`
//       let eventDate = createEventDate(node.day, node.time, (index-1)*7)

//       createPage({
//         path,
//         component: EventTemplate,
//         // In your template's graphql query, you can use path
//         // as a GraphQL variable to query for data from the markdown file.
//         context: {
//           eventid: node.id,
//           week: index,
//           date: eventDate,
//         },
//       })
      
//     }

//   })

//   // Singular Events create pages
//   // ============================

//   result.data.allContentfulEvents.edges.forEach(({ node }) => {
    
//     const path = `events/${node.id.substr(0, 8)}`
//     createPage({
//       path,
//       component: EventTemplate,
//       // In your template's graphql query, you can use path
//       // as a GraphQL variable to query for data from the markdown file.
//       context: {
//         eventid: node.id,
//       },
//     })
//   })

//   // Blogs Create Pages
//   // ===================


//   const blogTemplate = path.resolve(
//     `src/components/blog/BlogTemplate.js`
//   )

//   result.data.allContentfulBlogPosts.edges.forEach(({ node }) => {
    
//     const path = `blog/${node.slug}`
//     createPage({
//       path,
//       component: blogTemplate,
//       // In your template's graphql query, you can use path
//       // as a GraphQL variable to query for data from the markdown file.
//       context: {
//         slug:node.slug
//       },
//     })
//   })


// }