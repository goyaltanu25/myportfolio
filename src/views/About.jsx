import React, { Component } from 'react';

import data from "../staticData/data.json"

class About extends Component{
    render(){
        console.log('data', data[0].intro[0]);
        return<div>
            {
            data[0].intro.map((section,index)=>{
                return <>
                <div className={index === 0 || index % 2 === 0 ? "right-section" : "left-section"}>
                <section class="screen-center-content">
                    {section.heading}
                </section>
                <section className="content-section">
                    {section.subheading}
                    <p>{section.para}</p>
                    <ul className="skills-section">
                        {section.skills.map((skill)=>{
                            return <li>{skill}</li>
                        })}
                    </ul>
                </section>
                </div>
                </>
            })
        }
        </div>
        
    }
}

export default About;