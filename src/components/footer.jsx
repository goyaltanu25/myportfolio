import React, { Component } from 'react';

export default class Footer extends Component{
    render(){
        return(<div className="footer">
         <hr/>
         <div>
         <div className="footer-regards-msg">Thanks for stopping by!</div>
         <div>
            <span className="footer-social-links">Uttar Pradesh, India.</span>
            <span className="footer-social-links">
                <a href="https://icanfeelaround.wordpress.com/" target="_blank" rel="noreferrer">
                Blog
                </a>
            </span>
            <span className="footer-social-links">goyaltanu25@gmail.com</span>
         </div>
         </div>
        </div>)
    }
}