import React, { Component } from 'react';

import data from "../staticData/data.json"
import Experience from './Experience';
import WorkHistory from './WorkHistory';
import Intro from './Intro';
class About extends Component {
    render() {
        return <div>
            <Intro data={data[0].intro[0]} />
            <div className="card-head">
                <WorkHistory data={data[0].intro[1]} />
                <Experience data={data[0].intro[2]} />
            </div>
        </div>
    }
}

export default About;