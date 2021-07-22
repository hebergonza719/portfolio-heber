import React from 'react';
import conways from '../images/conways.gif';
import gallery from '../images/gallery.gif';
import todoos from '../images/todoos.gif';
import trackit from '../images/track-it.gif';
import gitstats from '../images/gitstats.gif';

const Main = () => {
  return (
    <div id="page-wrapper">
      {/* Header */}
      <header id="header" className="alt">
          <h1 id="logo"><a href="index.html">Twenty <span>by HTML5 UP</span></a></h1>
          <nav id="nav">
            <ul>
              <li className="current"><a href="index.html">Welcome</a></li>
              <li className="submenu">
                <a href="/">Layouts</a>
                <ul>
                  <li><a href="left-sidebar.html">Left Sidebar</a></li>
                  <li><a href="right-sidebar.html">Right Sidebar</a></li>
                  <li><a href="no-sidebar.html">No Sidebar</a></li>
                  <li><a href="contact.html">Contact</a></li>
                  <li className="submenu">
                    <a href="/">Submenu</a>
                    <ul>
                      <li><a href="/">Dolore Sed</a></li>
                      <li><a href="/">Consequat</a></li>
                      <li><a href="/">Lorem Magna</a></li>
                      <li><a href="/">Sed Magna</a></li>
                      <li><a href="/">Ipsum Nisl</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a href="/" className="button primary">Sign Up</a></li>
            </ul>
          </nav>
        </header>
      {/* Banner */}
      <section id="banner">
        {/*
						".inner" is set up as an inline-block so it automatically expands
						in both directions to fit whatever's inside it. This means it won't
						automatically wrap lines, so be sure to use line breaks where
						appropriate (<br />).
					*/}
        <div className="inner">
          <header>
            <h2>TWENTY</h2>
          </header>
          <p>This is <strong>Twenty</strong>, a free
            <br />
            responsive template
            <br />
            by <a href="http://html5up.net">HTML5 UP</a>.</p>
          <footer>
            <ul className="buttons stacked">
              <li><a href="#main" className="button fit scrolly">Tell Me More</a></li>
            </ul>
          </footer>
        </div>
      </section>
      {/* Main */}
      <article id="main">
        <header className="special container">
          <span className="icon solid fa-chart-bar" />
          <h2>As this is my <strong>twentieth</strong> freebie for HTML5 UP
            <br />
            I decided to give it a really creative name.</h2>
          <p>Turns out <strong>Twenty</strong> was the best I could come up with. Anyway, lame name aside,
            <br />
            it's minimally designed, fully responsive, built on HTML5/CSS3,
            and, like all my stuff,
            <br />
            released for free under the <a href="http://html5up.net/license">Creative Commons Attribution 3.0</a> license. Have fun!</p>
        </header>
        {/* One */}
        <section className="wrapper style2 container special-alt">
          <div className="row gtr-50">
            <div className="col-8 col-12-narrower">
              <header>
                <h2>Behold the <strong>icons</strong> that visualize what you’re all about. or just take up space. your call bro.</h2>
              </header>
              <p>Sed tristique purus vitae volutpat ultrices. Aliquam eu elit eget arcu comteger ut fermentum lorem. Lorem ipsum dolor sit amet. Sed tristique purus vitae volutpat ultrices. eu elit eget commodo. Sed tristique purus vitae volutpat ultrices. Aliquam eu elit eget arcu commodo.</p>
              <footer>
                <ul className="buttons">
                  <li><a href="/" className="button">Find Out More</a></li>
                </ul>
              </footer>
            </div>
            <div className="col-4 col-12-narrower imp-narrower">
              <ul className="featured-icons">
                <li><span className="icon fa-clock"><span className="label">Feature 1</span></span></li>
                <li><span className="icon solid fa-volume-up"><span className="label">Feature 2</span></span></li>
                <li><span className="icon solid fa-laptop"><span className="label">Feature 3</span></span></li>
                <li><span className="icon solid fa-inbox"><span className="label">Feature 4</span></span></li>
                <li><span className="icon solid fa-lock"><span className="label">Feature 5</span></span></li>
                <li><span className="icon solid fa-cog"><span className="label">Feature 6</span></span></li>
              </ul>
            </div>
          </div>
        </section>
        {/* Two */}
        <section className="wrapper style1 container special">
          <div className="row">
            <div className="col-4 col-12-narrower">
              <section>
                <span className="icon solid featured fa-check" />
                <header>
                  <h3>This is Something</h3>
                </header>
                <p>Sed tristique purus vitae volutpat ultrices. Aliquam eu elit eget arcu commodo suscipit dolor nec nibh. Proin a ullamcorper elit, et sagittis turpis. Integer ut fermentum.</p>
              </section>
            </div>
            <div className="col-4 col-12-narrower">
              <section>
                <span className="icon solid featured fa-check" />
                <header>
                  <h3>Also Something</h3>
                </header>
                <p>Sed tristique purus vitae volutpat ultrices. Aliquam eu elit eget arcu commodo suscipit dolor nec nibh. Proin a ullamcorper elit, et sagittis turpis. Integer ut fermentum.</p>
              </section>
            </div>
            <div className="col-4 col-12-narrower">
              <section>
                <span className="icon solid featured fa-check" />
                <header>
                  <h3>Probably Something</h3>
                </header>
                <p>Sed tristique purus vitae volutpat ultrices. Aliquam eu elit eget arcu commodo suscipit dolor nec nibh. Proin a ullamcorper elit, et sagittis turpis. Integer ut fermentum.</p>
              </section>
            </div>
          </div>
        </section>
        {/* Three */}
        <section className="wrapper style3 container special">
          <header className="major">
            <h2>My Projects</h2>
          </header>
          <div className="row">
            <div className="col-6 col-12-narrower">
              <section>
                <a href="/" className="image featured"><img src={conways} alt="" /></a>
                <header>
                  <h3>Conway's Game of Life</h3>
                </header>
                <p>A web app demonstrating a cellular automaton in the form of Conway’s “Game of Life.”</p>
              </section>
            </div>
            <div className="col-6 col-12-narrower">
              <section>
                <a href="/" className="image featured"><img src={gallery} alt="" /></a>
                <header>
                  <h3>Photo Gallery</h3>
                </header>
                <p>A web app where users can upload images and view them in a gallery.</p>
              </section>
            </div>
          </div>
          <div className="row">
            <div className="col-6 col-12-narrower">
              <section>
                <a href="/" className="image featured"><img src={todoos} alt="" /></a>
                <header>
                  <h3>ToDoos</h3>
                </header>
                <p>A web app that allows users to create a to-do list that could be accessed anywhere.</p>
              </section>
            </div>
            <div className="col-6 col-12-narrower">
              <section>
                <a href="/" className="image featured"><img src={trackit} alt="" /></a>
                <header>
                  <h3>Track It</h3>
                </header>
                <p>A web app that allows users to track their exercise routines and view previous exercise logs.</p>
              </section>
            </div>
          </div>
          <div className="row">
            <div className="col-3 col-0-narrower">

            </div>
            <div className="col-6 col-12-narrower">
              <section>
                <a href="/" className="image featured"><img src={gitstats} alt="" /></a>
                <header>
                  <h3>GitStats</h3>
                </header>
                <p>A web app designed to provide GitHub users with useful statistics regarding each of their repositories.</p>
              </section>
            </div>
            <div className="col-3 col-0-narrower">

            </div>
          </div>
        </section>
      </article>
      {/* Footer */}
      <footer id="footer">
        <ul className="icons">
          <li><a href="https://www.linkedin.com/in/heber-a-gonzalez" className="icon brands circle fa-linkedin"><span className="label">LinkedIn</span></a></li>
          <li><a href="https://github.com/hebergonza719" className="icon brands circle fa-github"><span className="label">Github</span></a></li>
        </ul>
        <ul className="copyright">
          <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
        </ul>
      </footer>
    </div>
  );
};

export default Main;