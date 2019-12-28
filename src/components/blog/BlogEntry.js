import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import EntryCSS from "./BlogEntry.module.scss";

const BlogEntry = (props) => {

    return (

        <div className={EntryCSS.blogentry}>
            <div className={EntryCSS.entryImg}>
                <Link to={`/blog/${props.entry.node.slug}`}>
                    <Img fluid={props.entry.node.blogMainImage.fluid} alt={props.entry.node.blogMainImage.description} />
                </Link>
            </div>
            <div className={EntryCSS.entrycopy}>
                <h3>{props.entry.node.title}</h3>
                <span className={EntryCSS.entrydate}>{props.entry.node.updatedAt}</span>
                {props.entry.node.categories.map(element => {
                    return (<span key={element + 1} className={EntryCSS.entrycategory}> · {element}</span>)
                })}
                <p>{`${props.entry.node.description.description.substr(0, 200)}...`}</p>

                <Link to={`/blog/${props.entry.node.slug}`}><button className={EntryCSS.readmorebutton}>Read More</button></Link>

            </div>

        </div>
    )
}

export default BlogEntry;