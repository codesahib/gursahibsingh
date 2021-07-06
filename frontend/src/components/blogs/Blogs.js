import React from 'react'
import { Card, Button } from 'react-bootstrap' 

import Thailand from '../../static/img/thailand.jpg'

import './Blogs.css'

export default function Blogs(props) {
    props.show_banner(false)
    props.show_home_link(true)

    document.title = "Blogs | Gursahib Singh"
    
    const openBlog = (blog_link) => {
        window.open("blogs/"+blog_link,"_self")
    }
    
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
                        <Button onClick={()=>{openBlog("thailand-2019")}}>Read</Button>
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
