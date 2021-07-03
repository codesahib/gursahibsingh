import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom"

import Home from '../home/Home'
import About from '../about/About'
import Projects from '../projects/Projects'
import Blogs from '../blogs/Blogs'

import './Navbar.css'
import Resume from '../../static/media/Resume_GursahibSingh.pdf'

export default function Navbar() {
    return (
        <>
        <nav className="navbar py-0 navbar-expand nav-full">
        {/* <a className="navbar-brand py-0" href="http://gursahibsingh.herokuapp.com/home" style="color:rgb(255,255,255) ;font-size: 30px;font-family: Chilanka; margin-left: 40px"><img src="{% static 'img/Logo (1).png' %}" alt=""></a>  */}
            <button className="navbar-toggler ml-auto custom-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="container">
                <div className="collapse navbar-collapse justify-content-between align-items-center w-100" id="navbarNavDropdown">
                    <ul className="navbar-nav mx-auto text-md-center text-left">
                        <li className="nav-item" style={{"margin-right": "10px"}}>
                            <a id="nav-link_about" className="nav-link" href="/about">About</a>
                        </li>

                        <li className="nav-item" style={{"margin-left": "10px","margin-right": "10px"}}>
                            <a className="nav-link" id="nav-link_projects" href="/projects">Projects
                            </a>
                        </li>
                        
                        <li className="nav-item" style={{"margin-left": "10px","margin-right": "10px"}}>
                            <a className="nav-link" id="nav-link_blogs" href="/blogs">Blogs
                            </a>
                        </li>

                        <li className="nav-item" style={{"margin-left": "10px"}}>
                            <a className="nav-link" href={Resume}>Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/home" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/projects" component={Projects}/>
                <Route path="/blogs" component={Blogs}/>
            </Switch>
        </Router>
        </>
    )
}
