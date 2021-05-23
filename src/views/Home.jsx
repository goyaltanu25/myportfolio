import React, { Component } from 'react';
import data from "../staticData/data.json"

class Home extends Component{
    render(){
        return<>

        <div className="right-section">
        <section className="screen-center-content">
        {data[2].intro}
        </section>   
        </div>
        <section>
        <p className="small-heading">Some of my Works!</p>
        </section>
        <section>
            <ul className="project-section">
                {data[2].githubprojects.map((project)=><li><a href={project.githublink} target="_blank" rel="noreferrer">{project.projectName}</a></li>)}
            </ul>
        </section>
        </> 
    }
}

export default Home;