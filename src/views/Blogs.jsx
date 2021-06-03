import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';

import blogImg from "../assets/blogs.svg"
import { Link } from 'react-router-dom';

const Blogs =()=>{

        return<>
        <section className="container-common">
          <section className="blog-container">
          <h1>Read <span className="pink-text">My Blogs</span></h1>    
          <img src={blogImg} className="blogsImg"/>
          </section>    

          <section className="blog-section">
          <Link className="blog-link" to='/blogs/lifeblogs'>Check out on Life Lessons!</Link>
          <p>In the Life Lessons category of blogs, I write mostly about Life lessons and share my experiences.</p>
          </section>
          <section className="blog-section">
          <Link className="blog-link" to='/blogs/techblogs'>Check out on Technical Lessons!</Link>
          <p>This section is mostly related to technical topics, all that I have learned and learning in my web development journey, I would share here.</p>

          </section>
          
        </section>
       
        </>
    
}
export default Blogs;