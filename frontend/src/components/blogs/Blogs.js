import { React, useEffect } from 'react'
import { Card, Button } from 'react-bootstrap' 
import {Link} from 'react-router-dom'

import Thailand from '../../static/img/thailand.jpg'

import './Blogs.css'

export default function Blogs(props) {
    // To resolve cannot update a component while rendering a different component warning
    useEffect(()=>{
        props.show_banner(false)
        props.show_home_link(true)
    })

    document.title = "Blogs | Gursahib Singh"
    
    return (
        <div id="blogsComponent">
            <div id="blogsContainer">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Thailand} />
                    <Card.Body>
                        <Card.Title>Thailand -2019</Card.Title>
                        <Card.Text>
                        The complete experience and some useful tips.
                        </Card.Text>
                        <Link to="/blogs/thailand">Read</Link>
                    </Card.Body>
                </Card>
            </div>
            <div id="otherLinksContainer">
                <h1 className="content-heading">Other Blogs</h1>
                <a className="content-para text-dark" href="https://udemyfreecoursehere.blogspot.com/">1. Udemy Free Courses</a>
                <a className="content-para text-dark" href="https://sahibincanada.blogspot.com/">2. Canada Visa process</a>
                <a className="content-para text-dark" href="https://sahibdroid.blogspot.com/">3. Android Tips and Tricks</a>
            </div>
        </div>
    )
}