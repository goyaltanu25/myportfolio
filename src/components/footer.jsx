import React, { Component } from 'react';
import {AiOutlineGithub,AiOutlineTwitter,AiOutlineMedium} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'

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
                        <div className="social-icon-container">
                            <div className="social-icons">
                                <a href="https://www.linkedin.com/in/tanu-goyal-b85617b0/" target="_blank"><FaLinkedinIn/></a>  
                            </div>
                            <div className="social-icons">
                            <a href="https://github.com/goyaltanu25" target="_blank"><AiOutlineGithub/></a>
                            </div>
                            <div className="social-icons">
                             <a href="https://twitter.com/TanuGoyal14" target="_blank"><AiOutlineTwitter/></a>
                            </div>
                            <div className="social-icons">
                             <a href="https://goyaltanu25.medium.com/" target="_blank"><AiOutlineMedium/></a>
                            </div>
                        </div>
                        <span className="footer-social-links">Uttar Pradesh, India.</span>
                        <span className="footer-social-links">goyaltanu25@gmail.com</span>   
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}