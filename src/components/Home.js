import React from 'react'
import { Link } from "react-scroll";
import { AnimatedOnScroll } from 'react-animated-css-onscroll';
import { CV } from './includes/Pictures';

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
                        <h4>Just your friendly fullstack web developer & graphics designer. </h4>
                        <br />
                        <h4>Looking forward to working with you !</h4>
                        <Link className="nav-links btn btn-outline-info mt-3" to="about" spy={true} offset={10} duration={500} smooth={true}>About Me</Link>
                        <a href={CV} className="btn btn-success mt-3 ml-3"><i className="fas fa-download"></i> Download CV</a>
                    </div>
                </div>
            </AnimatedOnScroll>
        </div>
    )
}
