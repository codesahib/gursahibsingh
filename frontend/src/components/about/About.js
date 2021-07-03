import React from 'react'

import './About.css'

export default function About() {
    return (
        <div className="aboutComponent">
            <div className="section dark-bg">
                <h1 class="content-heading" >ABOUT</h1>
                <div id="textAbout" className="light-bg">
                    <p className="content-para text-dark">Words can come close to defining a person but cannot define entirely. I come from Ludhiana, a city that has been my home from infancy till adolescence. Then I moved to Patiala for my undergraduation from Thapar Institute of Engineering and Technology. Currently I'm working as Senior Member Technical Staff in an EDA domain MNC. To know about my current role & internship projects, head over to the <a id="linkProjects" href="/projects">Projects</a> page.</p>    
                </div>
            </div>
        </div>
    )
}
