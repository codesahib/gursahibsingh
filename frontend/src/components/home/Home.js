import React from 'react'

import '../../static/css/style.css'

import Finance from '../../static/img/finance.jpg'
import Gym from '../../static/img/gym.jpg'
import Read from '../../static/img/read.jpg'
import Self from '../../static/img/self.jpg'

import './Home.css'

export default function Home() {
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

            {/* <div className="section">
                <h1 className="content-heading">Pillars of Strength</h1>
                <div className="section-part-large" id="cardContainer">
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
            </div>
             */}
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
