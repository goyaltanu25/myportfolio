import React, { Component } from 'react';
import data from "../staticData/data.json"

class Home extends Component {
    render() {
        return <>

            <div className="center-section">
                <section className="screen-center-content">
                    {data[2].intro}
                </section>
                <div className="line-hr">
                <span>
                   <h1>Some of my Works!</h1> 
              </span>
              </div>
              <ul  className="project-section ">
                    {data[2].githubprojects.map((project) => <li><a href={project.githublink} className="projectsLink" target="_blank" rel="noreferrer">{project.projectName}</a></li>)}
                </ul>
            </div>
           
        </>
    }
}

export default Home;