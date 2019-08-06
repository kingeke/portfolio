import React from 'react'
import { Link } from "react-scroll";
import { AnimatedOnScroll } from 'react-animated-css-onscroll';

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
                        <Link className="nav-links btn btn-outline-light mt-3" to="about" spy={true} offset={10} duration={500} smooth={true}>About Me</Link>
                    </div>
                </div>
            </AnimatedOnScroll>
        </div>
    )
}
