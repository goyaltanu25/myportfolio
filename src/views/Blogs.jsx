import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';

import blogImg from "../assets/blogs.svg"
const Blogs =()=>{
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        fetch("https://public-api.wordpress.com/rest/v1/sites/icanfeelaround.wordpress.com/posts")
        .then((res)=>res.json())
        .then((res)=>setPosts(res.posts));
    },[])

    function createMarkup(post) {
        return {__html: post};
      }
        return<>
        <section className="container-common">
        <section className="blog-container">
        <h1>Read <span className="pink-text">My Blogs</span></h1>    
        <img src={blogImg} className="introImg"/>
        </section>    
        
        {posts.length > 0 && posts.map((post)=>{
           return <section className="blog-section">
            <img src={post.featured_image} className="introImg"/>
            <h3 className="blog-link" dangerouslySetInnerHTML={createMarkup(post.title)}/>
            <p dangerouslySetInnerHTML={createMarkup(post.excerpt)}/>
            <Button variant="contained" color="primary" href={post.short_URL} target="_blank">
               Read more..
            </Button>
            {/* date */}
           </section>
        })
        
        }
        </section>
       
        </>
    
}
export default Blogs;