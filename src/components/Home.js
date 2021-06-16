import React from 'react'
import { Link } from "react-scroll";
import { AnimatedOnScroll } from 'react-animated-css-onscroll'

export default function Home({ handleNavBar }) {
    return (
        <div id="home">
            <span className="nav-button" onClick={() => handleNavBar()}>
                <div></div>
                <div></div>
                <div></div>
            </span>

            <AnimatedOnScroll animationIn="fadeInUp">
                <div className="row vh-100 p-sm-5 pt-5 pb-5">
                    <div className="col-12 my-auto">
                        <h2>Hi, I'm Chinonso Eke !</h2>
                        <br />
                        <h4>Just your friendly fullstack web developer. </h4>
                        <br />
                        <h4>Looking forward to working with you !</h4>
                        <Link className="nav-links btn btn-outline-info mt-3" to="about" spy={true} offset={10} duration={500} smooth={true}>About Me</Link>
                        <a href='https://drive.google.com/file/d/1w-UHkWtes-zwxxQ958zBirBNlNJdbIjI/view' target="_blank" rel="noopener noreferrer" className="btn btn-success mt-3 ml-3"><i className="fas fa-download"></i> Download CV</a>
                        <div className="mt-4 social-links">
                            <a href="https://linkedin.com/in/chinonso-eke-520753145/" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin fa-3x text-white"></i>
                            </a>
                            <a href="https://github.com/kingeke" className="ml-3" title="GitHub" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github fa-3x text-white"></i>
                            </a>
                            <a href="https://www.freecodecamp.org/kingeke" title="FreeCodeCamp" className="ml-3" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-free-code-camp fa-3x text-white"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </AnimatedOnScroll>
        </div>
    )
}
