import React from 'react'
import { Chrono } from "react-chrono";

import './Timeline.css'

export default function Timeline() {
    const items = [
        {
            title: "2023-Present",
            cardTitle: "Full time job",
            cardSubtitle:"Software Developer",
            cardDetailedText: "Siemens, Kitchener"
        },
        {
            title: "2023",
            cardTitle: "Full time job",
            cardSubtitle:"Software Developer",
            cardDetailedText: "ShyftLabs, Toronto"
        },
        {
            title: "2023",
            cardTitle: "Full time job",
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
            cardSubtitle:"ECE (Diploma in Business and Entrepreneurship)",
            cardDetailedText: "University of Waterloo"
        },
        {
            title: "2019-2021",
            cardTitle: "Full time job",
            cardSubtitle:"Senior Member Technical Staff",
            cardDetailedText: "Siemens EDA(Mentor Graphics), Noida"
        },
        {
            title: "2019",
            cardTitle: "Internship",
            cardSubtitle:"Software Intern",
            cardDetailedText: "Siemens EDA(Mentor Graphics), Noida"
        }
    ];

    const theme={
        primary: "#4d4855",
        secondary: "#C4B993",
        cardForeColor: "#C4B993"
    }

    return (
        <div id="timelineComponent">
            <Chrono items={items} mode="VERTICAL_ALTERNATING" theme={theme}  cardHeight={100} useReadMore={false} disableNavOnKey={true} hideControls/>
        </div>
    )
}
