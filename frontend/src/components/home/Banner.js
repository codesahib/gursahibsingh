import React from 'react'
import Arrow from '../utils/Arrow'

import './Banner.css'

export default function Banner() {
    return (
        <div id="bannerComponent">
            <div id="bannerContent">
                <i id="bannerIntro">Hey! I'm</i>
                <h1 id="bannerName">Gursahib Singh</h1>
            </div>
            <Arrow/>
        </div>
    )
}
