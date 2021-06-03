import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer-container">
                <div className="footer">
                    <div>
                        <div>
                        <span>
                            <h2 style={{color:'white'}}>Thanks for stopping by!</h2>
                        </span>
                            <span className="footer-social-links">Uttar Pradesh, India.</span>
                            <span className="footer-social-links" onClick={()=>window.scrollTo(0, 0)}>goyaltanu25@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}