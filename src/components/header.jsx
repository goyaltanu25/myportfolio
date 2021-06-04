import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import tanuImg from '../assets/tanugoyal.jpg'
import '../styles/styles.css'

export default class Header extends Component {
    render() {
        return<div className="navigation-container">
                <div className="nav">
                    <Link to="/">
                        <img src={tanuImg} alt="logo" className="brand"/>
                    </Link>
                <div>
                <Link to="/" className="nav-content">Home</Link>
                <Link to="/projects" className="nav-content">Projects</Link>
                <Link to="/blogs" className="nav-content">Blogs</Link>
                </div>
            </div>
        </div>

    }
}