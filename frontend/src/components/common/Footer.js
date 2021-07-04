import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <footer className="page-footer">
            <div id="contactContainer" className="container text-center text-md-left">
                <h1 id="textContact">CONTACT</h1>
                <div id="linksContainer" className="container">
                    <div id="emailContainer">
                        <p><a className="fa fa-google" href="mailto:gursahib.kvm@gmail.com"></a>&nbsp;&nbsp;gursahib.kvm@gmail.com</p>
                    </div>
                    <div id="socialMediaContainer">
                        <ul>
                            <li>
                                <a className="fa fa-linkedin" href="https://www.linkedin.com/in/gursahib-singh-04849b156/" target="_blank"></a>
                            </li>
                            <li>
                                <a className="fa fa-github" href="https://github.com/codesahib"  target="_blank"></a>
                            </li>

                            <li>
                                <a className="fa fa-instagram" href="https://www.instagram.com/gursahib__singh/?hl=en" target="_blank"></a>
                            </li>
                            <li>
                                <a className="fa fa-facebook fa-align-left" href="https://www.facebook.com/GS223" target="_blank"></a>
                            </li>
                            <li>
                                <a className="fa fa-quora" href="https://www.quora.com/profile/GurSahib-Singh-16" target="_blank"></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        
            <div className="footer-copyright text-center">
                <p>© 2021 Copyright: <a href="\">gursahibsingh.herokuapp.com</a></p>
            </div>
        </footer>
    )
}
