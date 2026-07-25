import type { BlogType } from "../types/Blog";
import { useState } from "react";
function Blog() {
    const [ blog, setBlog ] = useState<BlogType>({posts: [{title: "Test Post", description: "Test Post Description", image: undefined}]})
    return (
        <>
        {blog.posts.map(post => {
        return (
            <div className="post">
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <img src={post.image}></img>
            </div>)
        })}
        </>
    )
}

export default Blog