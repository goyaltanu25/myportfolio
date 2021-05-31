import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/styles.css'

export default class Header extends Component {
    render() {
        return<div className="navigation-container">
            <div className="nav">
                <Link to="/">NEW CODER</Link>
                <Link to="/" className="nav-content">Home</Link>
                <Link to="/about" className="nav-content">Projects</Link>
                <Link to="/contact" className="nav-content">Blogs</Link>
            </div>
        </div>

    }
}