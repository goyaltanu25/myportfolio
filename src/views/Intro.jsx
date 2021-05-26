import React, { Component } from 'react';
import tanuImg from "../assets/tanugoyal.jpg"

export default class Intro extends Component {
    render() {
        let {data} = this.props;
        return <>
            <div className="horizontal-card">
                <section className="img-section">
                    <img src={tanuImg} height="300" width="300" alt="tanugoyal" />
                </section>
                <div>
                    <section class="card-header">
                        {data.heading}
                    </section>
                    <section className="card-content">
                        {data.subheading}
                        <p>{data.para}</p>
                        <ul className="skills-section">
                            {data.skills.map((skill) => {
                                return <li>{skill}</li>
                            })}
                        </ul>
                        <ul className="skills-section">
                            {data.profiles.map((profile) => {
                                return <li><a href={profile.profileLink} target="_blank" rel="noreferrer">{profile.profile}</a></li>
                            })}
                        </ul>
                    </section>
                </div>
            </div>

        </>
    }
}