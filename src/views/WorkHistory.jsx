import React, { Component } from 'react';
import accentureImg from "../assets/accenture-logo.png"
export default class WorkHistory extends Component {
    render() {
        let { data } = this.props;
        return <>
            <div className="card">
                <div >
                    <section className="card-header">
                        {data.heading}
                    </section>
                    <section className="card-content" >
                        {data.subheading}
                        <p>{data.para}</p>
                    </section>
                </div>

            </div>

        </>
    }
}