import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { SiMicrosoftazure, SiJavascript } from 'react-icons/si';
import { FaCss3Alt, FaHtml5, FaReact, FaGitAlt, FaNodeJs, FaDatabase } from 'react-icons/fa'
import { Link } from 'react-router-dom';

import introImg from "../assets/personal_info.svg"
import aboutme from "../assets/aboutme.svg"

const skilldata=[
    {
        icon:<FaHtml5/>,
        class:"html",
        skill:'HTML5'
    },{
        icon:<FaCss3Alt/>,
        class:"css",
        skill:'CSS3'
    },{
        icon:<FaReact/>,
        class:"react",
        skill:'ReactJS'
    },{
        icon:<FaGitAlt/>,
        class:"git",
        skill:'Git'
    },{
        icon:<FaNodeJs/>,
        class:"node",
        skill:'Node'
    },{
        icon:<SiMicrosoftazure/>,
        class:"azure",
        skill:'Azure'
    },{
        icon:<SiJavascript/>,
        class:"js",
        skill:'JavaScript'
    },
    {
        icon:<FaDatabase/>,
        class:"db",
        skill:'Database'
    }
]
class Home extends Component {
   

    render() {
        return <>
            <div className="container-common">
                <section className="container">
                    <div className="content-container">
                        <h1>
                            <span className="text-greet">Hey,There!</span><br/><br/>
                            <span className="text">I am Tanu Goyal,Learning </span>
                            <span className="pink-text">Full Stack Development (MERN)</span>
                        </h1>
                    </div>
                    <div>
                        <img src={introImg} className="introImg" />
                    </div>
                </section>
                <section className="container">
                    <div>
                        <img src={aboutme} className="introImg" />
                    </div>
                    <div className="aboutme-content">
                        <h1 className="sub-heading">About me</h1>
                        <p>I am a passionate UI Developer, Based out in India. Apart from Technical Interests I enjoy listening TED talks a lot, I have keen interest in becoming a better human being, I am developing interest in planting, reading and I like writing.I also like dancing and chanting devotional songs.
                        </p>
                        <h4>As a Front End Developer, I have experience in following</h4>
                        <ol className="list-items" type="1">
                            <li>ReactJS</li>
                            <li>JavaScript</li>
                            <li>Angular 2+</li>
                            <li>HTML 5</li>
                            <li>CSS3</li>
      
                        </ol>
                    </div>

                </section>
                <section className="skill-container">
                    <div>
                        <h1>My Skills</h1>
                        <div className="skills-flex">
                            {skilldata.map((skill)=>{
                                return <div className="skill">
                                <i className={`icons + ${skill.class}`}>{skill.icon}</i>
                                <span><h3>{skill.skill}</h3></span>
                            </div>
                            })}
                        </div>

                    </div>
                </section>
                <section className="container projects">
                    <div>
                        <h1>My Projects</h1>
                        <div>
                            <p>I like to showcase my work, you can browse on my projects below.</p>
                            <Button variant="contained" color="primary">
                                <Link to="/projects">Browse Projects</Link>  
                            </Button>
                        </div>
                    </div>
                </section>
                <section className="container projects skill-container">
                    <div>
                        <h1>My Blogs</h1>
                        <div>
                            <p>I try to document what I learn, So If you like any of my work, you can read about how to achieve them here!</p>
                            <Button variant="outlined" color="primary">
                            <Link to="/blogs" className="pink-text">Read Blogs</Link>  
                            </Button>
                        </div>
                    </div>
                </section>
            </div>

        </>
    }
}

export default Home;
