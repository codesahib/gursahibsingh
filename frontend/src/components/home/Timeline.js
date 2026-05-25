import React from 'react'
import { Chrono } from "react-chrono";

import './Timeline.css'

export default function Timeline() {
    const items = [
        {
            title: "2025-Present",
            cardTitle: "Full-time Role",
            cardSubtitle:"Full stack Developer",
            cardDetailedText: "Brickeye, Toronto"
        },
        {
            title: "2023-2025",
            cardTitle: "Full-time Role",
            cardSubtitle:"Software Developer",
            cardDetailedText: "Siemens, Kitchener"
        },
        {
            title: "2023",
            cardTitle: "Full-time Role",
            cardSubtitle:"Software Developer",
            cardDetailedText: "ShyftLabs, Toronto"
        },
        {
            title: "2023",
            cardTitle: "Full-time Role",
            cardSubtitle:"Full Stack Developer",
            cardDetailedText: "BluekeyAI, Toronto"
        },
        {
            title: "2022",
            cardTitle: "Internship",
            cardSubtitle:"Full Stack Developer, UbiLab",
            cardDetailedText: "University of Waterloo"
        },
        {
            title: "2021-2022",
            cardTitle: "Master of Engineering",
            cardSubtitle:"ECE + Business and Entrepreneurship Diploma",
            cardDetailedText: "University of Waterloo"
        },
        {
            title: "2019-2021",
            cardTitle: "Full-time Role",
            cardSubtitle:"Senior Member Technical Staff",
            cardDetailedText: "Siemens EDA (Mentor Graphics), Noida"
        },
        {
            title: "2019",
            cardTitle: "Internship",
            cardSubtitle:"Software Intern",
            cardDetailedText: "Siemens EDA (Mentor Graphics), Noida"
        }
    ];

    const theme={
        primary: "#0f172a",
        secondary: "#e2e8f0",
        cardForeColor: "#0f172a"
    }

    return (
        <div id="timelineComponent">
            <Chrono items={items} mode="VERTICAL_ALTERNATING" theme={theme} cardHeight={100} useReadMore={false} disableNavOnKey={true} hideControls/>
        </div>
    )
}
