import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';

const TechBlog =()=>{
    const [posts,setPosts]=useState([]);
    
    useEffect(()=>{
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@goyaltanu25')
        .then((res)=>res.json())
        .then((res)=>setPosts(res.items));
    },[])

    function createMarkup(post) {
        return {__html: post};
      }
        return<>
        <section className="container-common">
        <section className="blog-container">
        <h1>Read <span className="pink-text">Tech Blogs</span></h1>    
        </section>    
        
        {posts.length > 0 && posts.map((post,index)=>{
           return <section key={index} className="blog-section">
            <h2 className="blog-link" dangerouslySetInnerHTML={createMarkup(post.title)}/>
            {new Date(post.pubDate).toDateString()}
            <p dangerouslySetInnerHTML={createMarkup(post.content)}/>
            <Button variant="contained" color="primary" href={post.link} target="_blank">
               Read more..
            </Button>
           </section>
        })
        
        }
        </section>
       
        </>
    
}
export default TechBlog;