import React from 'react'
import { Link } from 'react-router-dom'

import './Footer.css'

export default function Footer() {
    return (
        <footer className="page-footer">
            <div className="footer-main">
                <h1 className="footer-heading">CONTACT</h1>

                <div className="footer-links">
                    <div className="footer-email">
                        <a href="mailto:iamgursahib@gmail.com" className="fa fa-google"></a>
                        <span> iamgursahib@gmail.com</span>
                    </div>

                    <div className="footer-social">
                        <a className="fa fa-linkedin" href="https://www.linkedin.com/in/gursahib-singh-04849b156/" target="_blank" rel="noopener noreferrer"></a>
                        <a className="fa fa-github" href="https://github.com/codesahib" target="_blank" rel="noopener noreferrer"></a>
                        <a className="fa fa-instagram" href="https://www.instagram.com/gursahib__singh/?hl=en" target="_blank" rel="noopener noreferrer"></a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2025 Copyright: <Link to="/">codesahib.github.io/gursahibsingh</Link></p>
            </div>
        </footer>
    )
}
