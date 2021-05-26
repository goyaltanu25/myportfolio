import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (<div className="footer">
            <div className="line-hr">
                <span>
                   <h1>Thanks for stopping by!</h1> 
              </span>
            </div>
            <div>
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