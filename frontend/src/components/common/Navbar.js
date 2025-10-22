import {React, useState} from 'react'
import { Switch, Route, Link, Redirect, useLocation } from "react-router-dom"

import Home from '../home/Home'
import Projects from '../projects/Projects'
import Blogs from '../blogs/Blogs'
import BlogPage from '../blogs/BlogPage'
import PageNotFound from '../common/PageNotFound'

import './Navbar.css'
import Resume from '../../static/media/Resume_GursahibSingh.pdf'

{/*

    README

    1. Using '<Link>' instead of '<a>' because it automatically resolves links according to BrowserRouter or HashRouter

*/}

export default function Navbar(props) {
    const [homeLink, setHomeLink] = useState(true);
    const location = useLocation();

    // If on home page, navbar is light; otherwise dark
    const isHome = location.pathname === '/' || location.pathname === '/home';
    const navbarClass = isHome ? 'navbar-light' : 'navbar-dark';

    return (
        <>
        <nav className={`navbar py-0 navbar-expand nav-full ${navbarClass}`}>
        {/* <a className="navbar-brand py-0" href="http://gursahibsingh.herokuapp.com/home" style="color:rgb(255,255,255) ;font-size: 30px;font-family: Chilanka; marginLeft: 40px"><img src="{% static 'img/Logo (1).png' %}" alt=""></a>  */}
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
                        
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/blogs">Blogs</Link>
                        </li> */}

                        <li className="nav-item">
                            <a className="nav-link" href="https://drive.google.com/file/d/1TYPzjytu579AUJlIfc9pQvaj5VjxAGAS/view?usp=drive_link" target="_blank">Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        {/* Not using BrowserRouter as this is causing problems with gh-pages deployment */}
        {/* <Router> */}
            <Switch>
                {/* <Route exact path="/" component={Home}/> */}
                <Route exact path="/"><Home show_home_link={setHomeLink} show_banner={props.show_banner}/></Route>
                <Route exact path="/home"><Redirect to="/"/></Route>
                <Route exact path="/projects"><Projects show_home_link={setHomeLink} show_banner={props.show_banner}/></Route>
                <Route exact path="/blogs"><Blogs show_home_link={setHomeLink} show_banner={props.show_banner}/></Route>
                <Route exact path="/blogs/:blog_name"><BlogPage show_home_link={setHomeLink} show_banner={props.show_banner}/></Route>
                <Route><PageNotFound show_home_link={setHomeLink} show_banner={props.show_banner}/></Route>
            </Switch>
        {/* </Router> */}
        </>
    )
}
