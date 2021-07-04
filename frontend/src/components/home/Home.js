import React from 'react'
import Timeline from './Timeline'

import '../../static/css/style.css'

import './Home.css'

export default function Home() {
    document.title = "Home | Gursahib Singh"
    return (
        <>
        <div className="homeComponent">
            <div className="section" style={{backgroundColor: "#4d4855"}}>
                <h1 className="content-heading">ABOUT</h1>     
                <div className="section-part-large" style={{backgroundColor: "#FCFCF5"}}>
                    <p className="content-para text-dark"> I belong to that category of people who love to question things that we come across on daily basis. I just love exercising my body & mind (this has a much deeper meaning). I don't complicate things and stay away from formalities. More importantly, I'm the same version of me everywhere!</p>
                    <p className="content-para text-dark">I come from Ludhiana, a city that has been my home from infancy till adolescence. Then I moved to Patiala for my undergraduation from Thapar Institute of Engineering and Technology. Currently I'm working as Senior Member Technical Staff in an EDA domain MNC.</p>
                </div>
            </div>

            <div className="section">
                <h1 className="content-heading">Academic/Work History</h1>
                <Timeline/>
            </div>

            <div className="section">
                <h1 className="content-heading">Blogs</h1>
                <div className="section-part-large">
                    <p className="content-para text-dark"> I'm not a professional blog writer but I do like to express my experiences. My first blog describes the experiences from my Thailand trip which can be used as a guide for a better vacation time.</p>
                </div>
            </div>
        </div>
        </>
    )
}
