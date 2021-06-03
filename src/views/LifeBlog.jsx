import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';

const LifeBlog =()=>{
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
        <h1>Read <span className="pink-text">Life Blogs</span></h1>    
        </section>    
        
        {posts.length > 0 && posts.map((post)=>{
           return <section className="blog-section">
            <img src={post.featured_image} className="blogsImg"/>
            <h3 className="blog-link" dangerouslySetInnerHTML={createMarkup(post.title)}/>
            <p>{new Date(post.date).toDateString()}</p>
            <p dangerouslySetInnerHTML={createMarkup(post.excerpt)}/>
            <Button variant="contained" color="primary" href={post.short_URL} target="_blank">
               Read more..
            </Button>
           </section>
        })
        
        }
        </section>
       
        </>
    
}
export default LifeBlog;