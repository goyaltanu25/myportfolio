import React, { Component } from 'react';
import {
    Switch,
    Route
} from "react-router-dom";

//Custom Components
import Home from '../views/Home';
import Blogs from '../views/Blogs';
import Projects from '../views/Projects';
import LifeBlog from '../views/LifeBlog';
import TechBlog from '../views/TechBlog';


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
            <Route exact path="/blogs" component={Blogs}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/blogs/lifeblogs" component={LifeBlog}/>
            <Route path="/blogs/techblogs" component={TechBlog}/>
        </Switch>
        </>
        )
    }
}


