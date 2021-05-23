import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import LogoSpinner from './logospinner';

import '../styles/styles.css'

export default class Header extends Component {
    render() {
        return <div className="nav">
                    <div  className="brand">
                    <Link to="/"><LogoSpinner/></Link>
                    </div>
                    <Link to="/" className="nav-content">Home</Link>
                    <Link to="/about" className="nav-content">About</Link>
                    <Link to="/contact" className="nav-content">Contact</Link>
                </div>
    }
}