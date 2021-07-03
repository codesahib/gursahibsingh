import React from 'react'

import './Home.css'
import '../../static/css/style.css'

import Finance from '../../static/img/finance.jpg'
import Gym from '../../static/img/gym.jpg'
import Read from '../../static/img/read.jpg'
import Self from '../../static/img/self.jpg'

export default function Home() {
    return (
        <div className="homeComponent">
            <div className="section light-bg">
                <div className="section-part-small">
                    <h1 className="content-heading">ABOUT</h1>     
                </div>
                {/* <div className="vertical-line"></div> */}
                <div className="section-part-large left-border dark-bg" style={{"display":"inline-block"}}>
                    <p className="content-para text-light"> I belong to that category of people who love to question things that we come across on daily basis. I just love exercising my body & mind (this has a much deeper meaning). I don't complicate things and stay away from formalities. More importantly, I'm the same version of me everywhere!</p>
                </div>
            </div>

            <div className="section dark-bg">
                <div className="section-part-large light-bg right-border">
                    <p className="content-para text-dark"> My interests in different areas have led me to do a variety of projects. I've completed various projects during my academics and professional career. More information regarding them can be found under 'Projects' tab.</p>
                </div>
                {/* <div className="vertical-line"></div> */}
                <div className="section-part-small dark-bg">
                    <h1 className="content-heading">Projects</h1>
                </div>
            </div>

            <h1 className="content-heading">Pillars of Strength</h1>
            <div className="section cardContainer">
                <div className="content-card">
                    <img className="card-img-top" src={Gym} alt="Weight Training"></img>
                    <div className="card-body">
                        <h5 className="card-title">Exercise</h5>
                        <p className="card-text">There is a strong reason for why everyone is crazy about fitness.</p>
                    </div>
                </div>       

                <div className="content-card">
                    <img className="card-img-top" src={Finance} alt="Finance"></img>
                    <div className="card-body">
                        <h5 className="card-title">Games/Music/Movies</h5>
                        <p className="card-text">I too have the most common hobbies.</p>
                    </div>
                </div>

                <div className="content-card">
                    <img className="card-img-top" src={Read} alt="Read"></img>
                    <div className="card-body">
                        <h5 className="card-title">Reading</h5>
                        <p className="card-text">They say books are a man's best friend. They are absolutely right!</p>
                    </div>  
                </div>       

                <div className="content-card">
                    <img className="card-img-top" src={Self} alt="Self Improvement"></img>
                    <div className="card-body">
                        <h5 className="card-title">Self Improvement</h5>
                        <p className="card-text">Kyunki, sabse zyada time ham khud ke saath hi rehte hain.</p>
                    </div>  
                </div>
            </div>
            

            <div className="section dark-bg">
                <div className="section-part-small dark-bg">
                    <h1 className="content-heading">Blogs</h1>
                </div>
                {/* <div className="vertical-line"></div> */}
                <div className="section-part-large light-bg left-border">
                    <p className="content-para text-dark"> I'm not a professional blog writer but I do like to express my experiences. My first blog describes the experiences from my Thailand trip which can be used as a guide for a better vacation time.</p>
                </div>
            </div>
        </div>
    )
}
