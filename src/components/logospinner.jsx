import React, { Component } from 'react';
import logo from '../assets/logo.png'

import '../styles/styles.css'

export default class LogoSpinner extends Component {
    render() {
        return <>
               <div>
                   <img src={logo} height="100" width="100" id="spinner"/>
               </div>
            </>
    }
}