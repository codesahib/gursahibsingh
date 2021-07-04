import React from 'react'
import { Chrono } from "react-chrono";

import './Timeline.css'

export default function Timeline() {
    const items = [
      {
            title: "2019-Present",
            cardTitle: "Full time job",
            cardSubtitle:"Senior Member Technical Staff",
            cardDetailedText: "Siemens EDA(Mentor Graphics), Noida"
      },
      {
            title: "2019",
            cardTitle: "Internship",
            cardSubtitle:"Software Intern",
            cardDetailedText: "Siemens EDA(Mentor Graphics), Noida"
      },
      {
            title: "2015-2019",
            cardTitle: "Bachelor of Engineering",
            cardSubtitle:"CGPA: 9.50",
            cardDetailedText: "Thapar Institute of Engineering and Technology, Patiala"
      },
      {
        title: "2015",
        cardTitle: "Class 12th",
        cardSubtitle:"95.6%",
        cardDetailedText: "Kundan Vidya Mandir, Ludhiana"
      },
      {
        title: "2013",
        cardTitle: "Class 10th",
        cardSubtitle:"CGPA: 10",
        cardDetailedText: "Kundan Vidya Mandir, Ludhiana"
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
