import React from 'react'
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Home from '../home/Home'
import Projects from '../projects/Projects'
import Blogs from '../blogs/Blogs'
import BlogPage from '../blogs/BlogPage'

import './Navbar.css'
import Resume from '../../static/media/Resume_GursahibSingh.pdf'

export default function Navbar() {
    let showHomeLink = true;

    if(window.location.pathname === '/' || window.location.pathname === '/home'){
        showHomeLink = false;
    }

    return (
        <>
        <nav className="navbar py-0 navbar-expand nav-full">
        {/* <a className="navbar-brand py-0" href="http://gursahibsingh.herokuapp.com/home" style="color:rgb(255,255,255) ;font-size: 30px;font-family: Chilanka; marginLeft: 40px"><img src="{% static 'img/Logo (1).png' %}" alt=""></a>  */}
            <button className="navbar-toggler ml-auto custom-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="container">
                <div className="collapse navbar-collapse justify-content-between align-items-center w-100" id="navbarNavDropdown">
                    <ul className="navbar-nav mx-auto text-md-center text-left">

                        {showHomeLink && <li className="nav-item" style={{"marginLeft": "10px","marginRight": "10px"}}>
                            <a className="nav-link" id="nav-link_projects" href="/">Home
                            </a>
                        </li>}

                        <li className="nav-item" style={{"marginLeft": "10px","marginRight": "10px"}}>
                            <a className="nav-link" id="nav-link_projects" href="/projects">Projects
                            </a>
                        </li>
                        
                        <li className="nav-item" style={{"marginLeft": "10px","marginRight": "10px"}}>
                            <a className="nav-link" id="nav-link_blogs" href="/blogs">Blogs
                            </a>
                        </li>

                        <li className="nav-item" style={{"marginLeft": "10px"}}>
                            <a className="nav-link" href={Resume}>Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <Router>
            <Switch>
                {/* <Route exact path="/" component={Home}/>
                <Route path="/home" component={Home}/>
                <Route path="/projects" component={Projects}/>
                <Route path="/blogs" component={Blogs}/> */}
                <Route exact path="/"><Home/></Route>
                <Route exact path="/home"><Home/></Route>
                <Route exact path="/projects"><Projects/></Route>
                <Route exact path="/blogs"><Blogs/></Route>
                <Route exact path="/blogs/:blog_name/"><BlogPage/></Route>
            </Switch>
        </Router>
        </>
    )
}
