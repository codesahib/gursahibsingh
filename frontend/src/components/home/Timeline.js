import React from 'react'
import { Chrono } from "react-chrono";

import './Timeline.css'

export default function Timeline() {
    const items = [
        {
            title: "2025-Present",
            cardTitle: "Brickeye",
            cardSubtitle:"Full-stack Developer",
            cardDetailedText: "North York, ON"
        },
        {
            title: "2023-2025",
            cardTitle: "Siemens Canada Limited",
            cardSubtitle:"Software Developer",
            cardDetailedText: "Kitchener, ON"
        },
        {
            title: "2023",
            cardTitle: "ShyftLabs",
            cardSubtitle:"Software Developer",
            cardDetailedText: "Toronto, ON"
        },
        {
            title: "2022-2023",
            cardTitle: "Bluekey AI",
            cardSubtitle:"Full Stack Developer",
            cardDetailedText: "Toronto, ON"
        },
        {
            title: "2022",
            cardTitle: "UbiLab, University of Waterloo",
            cardSubtitle:"Full Stack Developer Intern",
            cardDetailedText: "Waterloo, ON"
        },
        {
            title: "2021-2022",
            cardTitle: "University of Waterloo",
            cardSubtitle:"Master of Engineering, ECE (GPA 90.75%)",
            cardDetailedText: "Waterloo, ON"
        },
        {
            title: "2019-2021",
            cardTitle: "Siemens EDA (Mentor Graphics)",
            cardSubtitle:"Senior Member Technical Staff",
            cardDetailedText: "Noida, India"
        },
        {
            title: "2019",
            cardTitle: "Siemens EDA (Mentor Graphics)",
            cardSubtitle:"Software Intern",
            cardDetailedText: "Noida, India"
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
