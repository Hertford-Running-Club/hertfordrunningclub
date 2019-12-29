import React from "react";
import Layout from "../layout";
import SEO from "../seo";
import Img from "gatsby-image";
import { Link, graphql } from "gatsby"
import Styles from "./BlogTemplate.module.scss";

export default ({ data }) => {

    const { id, title, slug, author, categories, createdAt: publishedDate, image, content, metaTitle, metaDescription } = data.contentfulBlogPosts

    return (

        <Layout>
            <SEO title={metaTitle} description={metaDescription} />
            <article className={Styles.blogContainer}>
                {console.log(title)}


                <h1>{title}</h1>
                <div className={Styles.blogInfoWidget}>
                <Img fluid={author.image.fluid} alt={author.image.description} />
                    <div className={Styles.blogInfoWidgetSubContainer}>
                    <p>By <Link to="/about" >{author.name}</Link></p>
                        <p>{publishedDate} · {content.childMarkdownRemark.timeToRead} Min Read</p>
                    </div>
                </div>
                <div className={Styles.categories}>
                    {categories.map((category, index)=>(
                        <span key={`${category.id}-${index}`}>{category.name}</span>
                    ))}
                   
                </div>
                <Img
                    fluid={image.fluid}
                    alt={image.description} />
                    {console.log(image)}
                <div className={Styles.blogMainContent}dangerouslySetInnerHTML={{ __html: content.childMarkdownRemark.html }} />
            </article>
        </Layout>
    )
}


export const query = graphql`
    query($slug: String!) {
        contentfulBlogPosts(slug: { eq: $slug }) {
        id
        slug
        title
        author {
            name
            image {
                fluid {
                    ...GatsbyContentfulFluid
                    }
                    description
            }
        }
        categories {
            id
            name
        }
        createdAt(fromNow: true)
        image {
            fluid {
            ...GatsbyContentfulFluid
            }
            description
        }
        content {
            childMarkdownRemark {
            html
            timeToRead
            }
        }
        metaTitle
        metaDescription 
        }
   
    }
    
  `


