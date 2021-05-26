import React, { Component } from 'react';
import data from "../staticData/data.json"

class Contact extends Component{
    render(){
        return<>
        <section className="center-section">
            <div className="head-font">
                {data[1].head}
            </div>
            <div className="work-font">
               <b>{data[1].subhead}</b> 
               <a href={`mailto:${data[1].gmailid}`}>
               <svg  width="60" height="60" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
               /></svg>
               </a>
            </div>
        </section>
        </>
    }
}
export default Contact;