import React from 'react'
import Link from 'gatsby-link'



const PostListing = ({post}) => <article>
    <h4><Link to={post.fields.slug}>{post.frontmatter.title}</Link></h4>
    <em>{post.frontmatter.date}</em>
    <p>
        {post.excerpt}
    </p>
    
</article>


export default PostListing