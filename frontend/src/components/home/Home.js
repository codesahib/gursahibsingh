import { React, useEffect } from 'react';
import Timeline from './Timeline';

import '../../static/css/style.css';
import './Home.css';

export default function Home(props) {
  useEffect(() => {
    props.show_banner(true);
    props.show_home_link(false);
  }, [props]);

  document.title = "Home | Gursahib Singh";

  return (
    <div className="homeComponent">

      {/* About Section */}
      <div className="section">
    <h2 className="content-heading">ABOUT</h2>
    <div className="about-cards">
        <div className="about-card">
            <h3>🌍 Life Journey</h3>
            <p>
                Born & raised in <strong>Ludhiana</strong>, moved to <strong>Patiala</strong> for undergrad, and finally called <strong>Waterloo</strong> home. Survived childhood, coffee, and Canadian snow.
            </p>
        </div>

       <div className="about-card">
            <h3>💻 Work & Skills</h3>
            <p>Languages? I speak fluent code… and sarcasm 🐍⚡🖖📜</p>
            <p>Web stuff? I make websites dance and APIs sing ⚛️🚀🐍🎛️🔗</p>
            <p>Databases? I speak SQL, NoSQL, and slightly dramatic queries 💾🍃🐘</p>
            <p>Tools & Cloud? I wrestle servers and tame cloud dragons ☁️🐳🔊🔧🐧✉️📝</p>
            <p>Software Engineering? I write code that even my past self can understand 🏗️🎨🔍📝🤖⚙️🌐</p>
        </div>

        <div className="about-card">
            <h3>😎 Personality</h3>
            <p>
                Always questioning “how?” and “why?” 🤔 <br />
                Mental & physical fitness enthusiast 🏋️‍♂️ <br />
                Loves coding, debugging, breaking stuff, and occasionally fixing it 🔧
            </p>
        </div>
    </div>
</div>


      {/* Academic / Work History */}
      <div className="section">
        <h2 className="content-heading">Academic / Work History</h2>
        <Timeline />
      </div>

    </div>
  );
}
