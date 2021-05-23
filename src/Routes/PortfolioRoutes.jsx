import React, { Component } from 'react';
import {
    Switch,
    Route
} from "react-router-dom";

//Custom Components
import Home from '../views/Home';
import About from '../views/About';
import Contact from '../views/Contact';


export default class PortfolioRoutes extends Component {
    render() {
        return (
        <>
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
        </Switch>
        </>
        )
    }
}


