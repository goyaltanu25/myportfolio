import React, { Component } from 'react';
import learning from "../assets/learning.png"

export default class Experience extends Component {
    render() {
        let { data } = this.props;
        return <>
            <div className="card">
                <div>
                    <section className="card-header">
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