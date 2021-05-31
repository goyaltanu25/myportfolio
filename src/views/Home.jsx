import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { SiMicrosoftazure, SiJavascript } from 'react-icons/si';
import { FaCss3Alt, FaHtml5, FaReact, FaGitAlt, FaNodeJs, FaDatabase } from 'react-icons/fa'


import introImg from "../assets/personal_info.svg"
import aboutme from "../assets/aboutme.svg"

class Home extends Component {
    render() {
        return <>
            <div className="container-common">
                <section className="container">
                    <div className="content-container">
                        <h1>
                            <span className="text-greet">Hey,There!</span><br />
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
                        <p>I am 24 years old, Based in India. Apart from Technical Interests I enjoy listening TED talks a lot, I have keen interest in becoming a better human being, I am developing interest in planting, reading and I like writing. And Not to miss, I also like dancing and chanting devotional songs Well.
                        </p>
                        <h2>As a Front End Developer, I have experience in following</h2>
                        <ol className="list-items" type="1">
                            <li>ReactJS</li>
                            <li>JavaScript</li>
                            <li>Angular 2+</li>
                            <li>HTML 5</li>
                            <li>CSS3</li>
                        </ol>
                    </div>

                </section>
                <section className="container skill-container">
                    <div>
                        <h1>My Skills</h1>
                        <div className="skills-flex">
                            <div>
                                <i className="html icons"><FaHtml5 /></i>
                                <span><h3>HTML5</h3></span>
                            </div>
                            <div>
                                <i className="icons css"><FaCss3Alt /></i>
                                <span><h3>CSS3</h3></span>
                            </div>
                            <div>
                                <i className="icons js"><SiJavascript /></i>
                                <span><h3>JavaScript</h3></span>
                            </div>
                            <div>
                                <i className="icons react"><FaReact /></i>
                                <span><h3>ReactJS</h3></span>
                            </div>
                            <div>
                                <i className="icons git"><FaGitAlt /></i>
                                <span><h3>Git</h3></span>
                            </div>
                            <div>
                                <i className="icons azure"><SiMicrosoftazure /></i>
                                <span><h3>Azure</h3></span>
                            </div>
                            <div>
                                <i className="icons node"><FaNodeJs /></i>
                                <span><h3>Node</h3></span>
                            </div>
                            <div>
                                <i className="icons db"><FaDatabase /></i>
                                <span><h3>Database</h3></span>
                            </div>

                        </div>

                    </div>
                </section>
                <section className="container projects">
                    <div>
                        <h1>My Projects</h1>
                        <div>
                            <p>I like to showcase my work, you can browse on my projects below.</p>
                            <Button variant="contained" color="primary" href="/projects">
                                Browse Projects
                            </Button>
                        </div>
                    </div>
                </section>
                <section className="container projects skill-container">
                    <div>
                        <h1>My Blogs</h1>
                        <div>
                            <p>I try to document what I learn, So If you like any of my work, you can read about how to achieve them here!</p>
                            <Button variant="outlined" color="primary" href="/blogs">
                                Read Blogs
                            </Button>
                        </div>
                    </div>
                </section>
            </div>

        </>
    }
}

export default Home;