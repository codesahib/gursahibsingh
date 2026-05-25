import {React, useState} from 'react'
import { Switch, Route, Link, Redirect, useLocation } from "react-router-dom"

import Home from '../home/Home'
import Projects from '../projects/Projects'
import Blogs from '../blogs/Blogs'
import BlogPage from '../blogs/BlogPage'
import PageNotFound from '../common/PageNotFound'

import './Navbar.css'

export default function Navbar(props) {
    const [homeLink, setHomeLink] = useState(true);
    const location = useLocation();

    const isHome = location.pathname === '/' || location.pathname === '/home';
    const navbarClass = isHome ? 'navbar-light' : 'navbar-dark';

    return (
        <>
        <nav className={`navbar py-0 navbar-expand nav-full ${navbarClass}`}>
            <button className="navbar-toggler ml-auto custom-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="container">
                <div className="collapse navbar-collapse justify-content-between align-items-center w-100" id="navbarNavDropdown">
                    <ul className="navbar-nav mx-auto text-md-center text-left">

                        {homeLink && <li className="nav-item">
                            <Link className="nav-link" to="/home">Home</Link>
                        </li>}

                        <li className="nav-item">
                            <Link className="nav-link" to="/projects">Projects</Link>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="https://docs.google.com/document/d/1qgG12-a9dowBttPqp6amrGiaz7LoM_th/edit?usp=sharing&ouid=109065384455911240388&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
            <Switch>
                <Route exact path="/"><Home show_home_link={setHomeLink} show_banner={props.show_banner}/></Route>
                <Route exact path="/home"><Redirect to="/"/></Route>
                <Route exact path="/projects"><Projects show_home_link={setHomeLink} show_banner={props.show_banner}/></Route>
                <Route exact path="/blogs"><Blogs show_home_link={setHomeLink} show_banner={props.show_banner}/></Route>
                <Route exact path="/blogs/:blog_name"><BlogPage show_home_link={setHomeLink} show_banner={props.show_banner}/></Route>
                <Route><PageNotFound show_home_link={setHomeLink} show_banner={props.show_banner}/></Route>
            </Switch>
        </>
    )
}
