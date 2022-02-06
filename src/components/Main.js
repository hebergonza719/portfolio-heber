import React, { useEffect } from 'react';
import ContactForm from './ContactForm';
import cssLogo from '../images/Icons/css.svg';
import expressLogo from '../images/Icons/express.svg';
import htmlLogo from '../images/Icons/html.svg';
import jsLogo from '../images/Icons/javascript.svg';
import mongoLogo from '../images/Icons/mongodb.svg';
import nodeLogo from '../images/Icons/node-js.svg';
import pgLogo from '../images/Icons/postgresql.svg';
import reactLogo from '../images/Icons/react.svg'; 
import Navbar from './Navbar';
import AnimatedImage from "../components/AnimatedImage";
import AOS from "aos";
import "aos/dist/aos.css";

import bootstrap from "bootstrap";

const Main = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 1,
        margin: "1em 0 2em 0"
      }}
    />
  );
  return (
    <div id="page-wrapper">
      {/* Header */}
      <Navbar />
      {/* Banner */}
      <section id="banner">
        <div className="inner">
          <header>
            <h2>Heber Gonzalez</h2>
          </header>

          <footer>
            <h4>Full Stack Web Developer</h4>
          </footer>
        </div>
      </section>
      {/* Main */}
      <article id="main">
        <header data-aos="fade-left" className="special container">
          <span className="icon solid fas fa-code" />
          <h2>I am <strong>Full Stack Web Developer</strong></h2>
          <h2>located in the New York City area</h2>
          <p>I have a <strong>passion</strong> for learning new programming languages and expanding my tech stack.</p>
          <p>I believe there is always room for improving my skills as a developer.</p>
        </header>
        {/* One */}
        <section data-aos="fade-right" className="wrapper style2 container special-alt">
          <div className="row gtr-50">
            <div className="col-12 col-12-narrower">
              <header>
                <h2><strong>Skills &amp; Tech Stack</strong></h2>
              </header>
              <p className='section1-p'>On the <strong>front-end</strong> side, I'm strong with HTML, CSS, Bootstrap and ReactJS.</p>
              <p className='section1-p'>As for the <strong>back-end</strong>, I am proficient with Express.js, Sequelize, Knex, MongoDb and PostgreSQL.</p>
              <p className='section1-p'>I also have experience with Python, Trello, GitHub, and deployment with Netlify and Heroku.</p>
            </div>
          </div>
        </section>
        {/* Two */}
        <section data-aos="fade-left" className="wrapper style1 container special">
          <div className="row logo-row">
            <div className="col-3 col-6-narrower">
              <section>
                <AnimatedImage source={htmlLogo} altText="html logo" />
                <header>
                  <h4>HTML</h4>
                </header>
              </section>
            </div>
            <div className="col-3 col-6-narrower">
              <section>
                <AnimatedImage source={cssLogo} altText="css logo" />
                <header>
                  <h4>CSS</h4>
                </header>
              </section>
            </div>
            <div className="col-3 col-6-narrower">
              <section>
                <AnimatedImage source={jsLogo} altText="javascript logo" />
                <header>
                  <h4>JavaScript</h4>
                </header>
              </section>
            </div>
            <div className="col-3 col-6-narrower">
              <section>
                <AnimatedImage source={reactLogo} altText="react js logo" />
                <header>
                  <h4>ReactJS</h4>
                </header>
              </section>
            </div>
          </div>
          {/* Row 2 */}
          <div className="row">
            <div className="col-3 col-6-narrower">
              <section>
                <AnimatedImage source={expressLogo} altText="express js logo" />
                <header>
                  <h4>Express</h4>
                </header>
              </section>
            </div>
            <div className="col-3 col-6-narrower">
              <section>
                <AnimatedImage source={nodeLogo} altText="node js logo" />
                <header>
                  <h4>Node.js</h4>
                </header>
              </section>
            </div>
            <div className="col-3 col-6-narrower">
              <section>
                <AnimatedImage source={pgLogo} altText="postgresql logo" />
                <header>
                  <h4>PostgreSQL</h4>
                </header>
              </section>
            </div>
            <div className="col-3 col-6-narrower">
              <section>
                <AnimatedImage source={mongoLogo} altText="mongodb logo" />
                <header>
                  <h4>MongoDb</h4>
                </header>
              </section>
            </div>
          </div>
          {/* Row 3 */}
        </section>
        {/* Three */}
        <section className="wrapper style3 container special">
          <header className="major">
            <h2 className="section-title">My Projects</h2>
          </header>
          <div className="row">
            <div className="col-6 col-12-narrower">
              <section className="app-section">
                {/* <a href="https://game-of-life-conways.netlify.app" className="image featured"><img src={conways} alt="Conway's game of life app" /></a> */}
                <header>
                  <h3 className="app-title">Conway's Game of Life</h3>
                </header>
                <p className="app-description">A web app demonstrating a cellular automaton in the form of Conway’s “Game of Life.”</p>
                <div className="row">
                  <div className="col-3 col-0-narrower"></div>
                  <div className="col-6 col-12-narrower button-container">
                    <a className="app-links" href="https://game-of-life-conways.netlify.app">Site</a>
                    <a className="app-links" href="https://github.com/hebergonza719/CS-Build-Week-One/tree/main/game-of-life">GitHub</a>
                  </div>
                  <div className="col-3 col-0-narrower"></div>
                </div>
              </section>
            </div>
            <div className="col-6 col-12-narrower">
              <section className="app-section">
                {/* <a href="https://photo-gallery-front-end.netlify.app/" className="image featured"><img src={gallery} alt="Gallery App" /></a> */}
                <header>
                  <h3 className="app-title">Photo Gallery</h3>
                </header>
                <p className="app-description">A web app where users can upload images and view them in a gallery.</p>
                <div className="row">
                  <div className="col-3 col-0-narrower"></div>
                  <div className="col-6 col-12-narrower button-container">
                    <a className="app-links" href="https://photo-gallery-front-end.netlify.app/">Site</a>
                    <a className="app-links" href="https://github.com/hebergonza719/photo-gallery">GitHub</a>
                  </div>
                  <div className="col-3 col-0-narrower"></div>
                </div>
              </section>
            </div>
          </div>
          <ColoredLine color="#dee2e6"/>
          <div className="row">
            <div className="col-6 col-12-narrower">
              <section className="app-section">
                {/* <a href="https://to-doos-app.herokuapp.com" className="image featured"><img src={todoos} alt="ToDoos App" /></a> */}
                <header>
                  <h3 className="app-title">ToDoos</h3>
                </header>
                <p className="app-description">A web app that allows users to create a to-do list that could be accessed anywhere.</p>
                <div className="row">
                  <div className="col-3 col-0-narrower"></div>
                  <div className="col-6 col-12-narrower button-container">
                    <a className="app-links" href="https://to-doos-app.herokuapp.com">Site</a>
                    <a className="app-links" href="https://github.com/hebergonza719/to-do-list">GitHub</a>
                  </div>
                  <div className="col-3 col-0-narrower"></div>
                </div>
              </section>
            </div>
            <div className="col-6 col-12-narrower">
              <section className="app-section">
                {/* <a href="https://track-it-exercise-app.herokuapp.com/" className="image featured"><img src={trackit} alt="" /></a> */}
                <header>
                  <h3 className="app-title">Track It</h3>
                </header>
                <p className="app-description">A web app that allows users to track their exercise routines and view previous exercise logs.</p>
                <div className="row">
                  <div className="col-3 col-0-narrower"></div>
                  <div className="col-6 col-12-narrower button-container">
                    <a className="app-links" href="https://track-it-exercise-app.herokuapp.com/">Site</a>
                    <a className="app-links" href="https://github.com/hebergonza719/exercise_tracker">GitHub</a>
                  </div>
                  <div className="col-3 col-0-narrower"></div>
                </div>
              </section>
            </div>
          </div>
          <ColoredLine color="#dee2e6"/>
          <div className="row">
            <div className="col-3 col-0-narrower">
            </div>
            <div className="col-6 col-12-narrower">
              <section>
                {/* <a href="https://github.com/Lambda-School-Labs/github-commit-analysis-fe" className="image featured"><img src={gitstats} alt="" /></a> */}
                <header>
                  <h3 className="app-title">GitStats</h3>
                </header>
                <p className="app-description">A web app designed to provide GitHub users with useful statistics regarding each of their repositories.</p>
                <div className="row">
                  <div className="col-1 col-0-narrower"></div>
                  <div className="col-10 col-12-narrower button-container">
                    <a className="app-links" href="https://github.com/Lambda-School-Labs/github-commit-analysis-fe">GitHub Front-end</a>
                    <a className="app-links" href="https://github.com/Lambda-School-Labs/github-commit-analysis-be">GitHub Back-end</a>
                  </div>
                  <div className="col-1 col-0-narrower"></div>
                </div>
              </section>
            </div>
            <div className="col-3 col-0-narrower">

            </div>
          </div>
        </section>
        <ContactForm />
      </article>
      {/* Footer */}
      <footer id="footer">
        <ul className="icons">
          <li><a href="https://www.linkedin.com/in/heber-a-gonzalez" className="icon brands circle fa-linkedin"><span className="label">LinkedIn</span></a></li>
          <li><a href="https://github.com/hebergonza719" className="icon brands circle fa-github"><span className="label">Github</span></a></li>
        </ul>
        <ul className="copyright">
          <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
          <li>Photo by Florian Olivo on Unsplash</li>
        </ul>
      </footer>
    </div>
  );
};

export default Main;
