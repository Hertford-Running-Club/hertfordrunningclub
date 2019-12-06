import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image";
import Layout from "../layout";

export default ({ data }) => {
  return (
    <Layout>

    </Layout>
  )
}

// export const query = graphql`
//   query($eventid: String!) {
//     allContentfulEvents(id: { eq: $eventid }) {
//         edges {
//             node {
//                 id
//                 eventType
//                 eventTitle
//                 meetUpAddress
//                 terrain
//                 eventLevel
//                 description {
//                     childMarkdownRemark {
//                         html
//                     }
//                 }
//                 date(formatString: "")
//             }
//         }
//     }
            
// }
// `

// allContentfulRecurringEvents {
//     edges {
//         node {
//             id
//             eventType
//             eventTitle
//             meetUpAddress
//             terrain
//             eventLevel
//             description {
//                 childMarkdownRemark {
//                     html
//                 }
//             }
//             day
//             time
//         }
//     }
// }
