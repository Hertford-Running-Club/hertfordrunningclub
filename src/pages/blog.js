// import React from "react"
// import Layout from "../components/layout"
// import SEO from "../components/seo"
// import { Link, graphql, useStaticQuery } from "gatsby"
// import Img from "gatsby-image"
// import Styles from "../components/blog/Blog.module.scss"

// export default ({ data }) => {


//     const { metaTitle, metaDescription, title: pageTitle, introduction } = data.allContentfulBlogMenu.edges[0].node

//     return (

//         <Layout>
//             <SEO
//                 title={metaTitle}
//                 description={metaDescription}
//             />
//             <section className={Styles.pagecontainer}>
//             <div className={Styles.intro}>
//             <h1>{pageTitle}</h1>
//             <div dangerouslySetInnerHTML={{ __html: introduction.childMarkdownRemark.html }} />
//             </div>

//             <div className={Styles.grid}>
//             {data.allContentfulBlogPosts.edges.map((blog, index) => {
//                 const { id, title, description, slug, image, categories, author, createdAt } = blog.node
//                 return (
                    
//                         <Link to={`blog/${slug}`} key={`${id}-${index}`}>
//                             <div className={Styles.blog}>
//                             <Img className={Styles.blogimage} fluid={image.fluid} alt={image.description} />
//                             {categories.map((category, index) => (
//                                 <span className={Styles.category} key={`${id}-${index}`}>{category.name}</span>
//                             ))}
//                             <h4>{title}</h4>
//                             <span>By {author.name}</span> | <span>{createdAt}</span>
//                             </div>

//                         </Link>

//                 )
//             }
//             )}
//             </div>
//             </section>


//         </Layout>
//     )

// }


// export const query = graphql`
// {
//     allContentfulBlogMenu {
//       edges {
//         node {
//           id 
//           title
//           introduction{
//             childMarkdownRemark{
//               html
//             }
//           }
//           metaTitle
//           metaDescription
//         }
//       }
//     }
//     allContentfulBlogPosts {
//       edges {
//         node {
//           id
//           title
//           description
//           slug
//           image {
//             fluid{
//                 ...GatsbyContentfulFluid
//             }
//             description
//           }
//           categories {
//               id
//             name
//           }
//         createdAt(formatString:"MMM DD")
//           author{
//             name
//           }
//         }
//       }
//     }
    
//   }
//   `