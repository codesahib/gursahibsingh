import {React, useEffect} from 'react'

import './Projects.css'

export default function Projects(props) {
    // To resolve cannot update a component while rendering a different component warning
    useEffect(()=>{
        props.show_banner(false)
        props.show_home_link(true)
    })

    document.title = "Projects | Gursahib Singh"
    
    return (
        <div id="projectComponent">
            <div className="section" style={{backgroundColor: "#4d4855"}}>
                <h1 className="content-heading">PROJECTS</h1>     
                <div className="section-part-large" style={{backgroundColor: "#FCFCF5"}}>
                <p className="content-para text-dark"> I've tried doing projects in many seemingly intereseting fields. The range of areas that I've worked upon are <span className="text-highlight">Web Development, Machine Learning, App Development(very basic), and Scripting.</span></p>
                <p className="content-para text-dark"> I plan to work more on the <span className="text-highlight">Cloud and Automation</span> tools that will eventually help stand in sync with the changing world</p>
                </div>
            </div>
            <div id="projectsContainer">
                <div className="project">
                    <h2 className="project-title">Personal Website</h2>
                    <h6 className="project-subtitle">(A Dynamic Resume)</h6>
                    <div className="horizontal-line"></div>
                    <div className="project-detail">
                        <p className="content-para text-dark"><span className="text-highlight">Motivation: </span>Paper based or even digital single page Resumes are boring</p>
                        <p className="content-para text-dark"><span className="text-highlight">Objective: </span>To create a dynamic and reactive web-based portfolio</p>
                    </div>
                    <div className="button-container">
                        <a className="button" href="https://github.com/codesahib/mysite" target="_blank">GitHub</a>
                        <a className="button" href="/home" target="_blank">Link</a>
                    </div>  
                </div>
                <div className="project">
                    <h2 className="project-title">Project-ToDo</h2>
                    <h6 className="project-subtitle">(React.js Single Page App)</h6>
                    <div className="horizontal-line"></div>
                    <div className="project-detail">
                        <p className="content-para text-dark"><span className="text-highlight">Motivation: </span>There are todo list app available for a single tasks. But this web app will be a todo list to track projects. Each project can then have it's own set of tasks.</p>
                        <p className="content-para text-dark"><span className="text-highlight">Objective: </span>To learn React.js library with a hands-on project</p>
                    </div>
                    <div className="button-container">
                        <a className="button" href="https://github.com/codesahib/Project-ToDo/tree/master/frontend" target="_blank">GitHub</a>
                        <a className="button" href="https://codesahib.github.io/Project-ToDo/" target="_blank">Link</a>
                    </div>  
                </div>
                <div className="project">
                    <h2 className="project-title">Mood Mapper</h2>
                    <h6 className="project-subtitle">(Android Application)</h6>
                    <div className="horizontal-line"></div>
                    <div className="project-detail">
                        <p className="content-para text-dark"><span className="text-highlight">Motivation: </span>We feel different emotions but don't track them to form opinions</p>
                        <p className="content-para text-dark"><span className="text-highlight">Objective: </span>To track different moods of a user on daily/weekly/monthly/yearly basis. The user will just click on the mood at any time of the day and it will be stored in the database.</p>
                    </div>
                    <div className="button-container">
                        <a className="button" href="https://github.com/codesahib/Mood-Mapper" target="_blank">GitHub</a>
                    </div>  
                </div>
                <div className="project">
                    <h2 className="project-title">Udemy Paid Course Grabber</h2>
                    <h6 className="project-subtitle">(Python Web Scrapper)</h6>
                    <div className="horizontal-line"></div>
                    <div className="project-detail">
                        <p className="content-para text-dark"><span className="text-highlight">Motivation: </span>Udemy content creaters offers 100% discount coupons on their courses. Why not get them?</p>
                        <p className="content-para text-dark"><span className="text-highlight">Objective: </span>To web scrap free courses listed by multiple sites and have them in one place and also generate html page based on those course for blog post</p>
                    </div>
                    <div className="button-container">
                        <a className="button" href="https://github.com/codesahib/WebScrapper-Udemy-Paid-Courses" target="_blank">GitHub</a>
                        <a className="button" href="https://udemyfreecoursehere.blogspot.com" target="_blank">Link</a>
                    </div>  
                </div>
                <div className="project">
                    <h2 className="project-title">Mapped Directory for Test Case Repository
</h2>
                    <h6 className="project-subtitle">(Organisational Project)</h6>
                    <div className="horizontal-line"></div>
                    <div className="project-detail">
                        <p className="content-para text-dark"><span className="text-highlight">Motivation: </span>The testcases are speard out wildly in a disk space. Why not map each testcase with it's parent and children?</p>
                        <p className="content-para text-dark"><span className="text-highlight">Objective: </span>To develop a ‘phone directory’ type structure for the test case repository to help find which test case belongs to which group.</p>
                    </div>
                    <div className="button-container" style={{ "display": "none" }}>
                        <a className="button" href="https://github.com/codesahib/WebScrapper-Udemy-Paid-Courses" target="_blank">GitHub</a>
                        <a className="button" href="https://github.com/codesahib/WebScrapper-Udemy-Paid-Courses" target="_blank">Link</a>
                    </div>  
                </div>
            </div>
        </div>
    )
}
