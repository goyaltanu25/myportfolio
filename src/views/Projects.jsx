import React, { Component } from 'react';
import { Button } from '@material-ui/core';

import projectsImg from "../assets/projects.svg"
class Projects extends Component {
    render() {
        return <section className="container-common">
            <section className="blog-container">
                <h1>Check <span className="pink-text">My Projects</span></h1>
                <img src={projectsImg} className="blogsImg" />
            </section>
            <section className="blog-section">
                <div className="description">
                    <h2 className="blog-link">1. Inventory Portal</h2>
                    <p>This a basic inventory portal, 
                        where you can add products and view them. It is made using ReactJS.You may use these <span className="pink-text">Username:user0109, password:happyworld</span> to login.
                    </p>
                </div>
                <div className="flex-items">
                <div className="portfolio-button" >
                    <Button 
                    variant="contained" 
                    color="primary" 
                    href="https://inventoryportal.netlify.app/" 
                    target="_blank">
                        Live Demo
                    </Button>
                </div>   
                <div className="portfolio-button">  
                    <Button  variant="outlined" color="primary" href="https://github.com/goyaltanu25/InventoryPortal.git" target="_blank">
                        View Source Code
                    </Button>
                </div>

                </div>
               
            </section>
            <section className="blog-section">
                <div className="description">
                    <h2 className="blog-link">2. File Explorer</h2>
                    <p>This project is developed using ReactJS. Idea is to develop basic features of file explorer, like create File/Folder/ view Heirarchy.
                        <span className="pink-text"> Work in progress</span>
                    </p>
                </div>
                <div className="flex-items">
                <div className="portfolio-button" >
                    <Button 
                    variant="contained" 
                    color="primary" 
                    href="https://filebrowserapp.netlify.app/" 
                    target="_blank">
                        Live Demo
                    </Button>
                </div>   
                <div className="portfolio-button">  
                    <Button  variant="outlined" color="primary" href="https://github.com/goyaltanu25/FileExplorer.git" target="_blank">
                        View Source Code
                    </Button>
                </div>

                </div>
               
            </section>
        
        </section>
    }
}

export default Projects;