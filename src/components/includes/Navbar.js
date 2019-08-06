import React from 'react'
import { avatar } from './Pictures';
import { Link } from "react-scroll";

export default function Navbar({ handleNavBar }) {
    return (
        <nav className="side-nav">
            <img src={avatar} alt="Avatar" className="avatar shadow animated fadeIn delay-1s" />
            <ul>
                <li className="animated fadeInLeft">
                    <Link
                        activeClass="active"
                        className="nav-links"
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={500}
                        onClick={handleNavBar}>
                        Home
                    </Link>
                </li>
                <li className="animated fadeInRight">
                    <Link
                        activeClass="active"
                        className="nav-links"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={10}
                        duration={500}
                        onClick={handleNavBar}>
                        About Me
                    </Link>
                </li>
                <li className="animated fadeInLeft">
                    <Link
                        activeClass="active"
                        className="nav-links"
                        to="recent-works"
                        spy={true}
                        smooth={true}
                        offset={10}
                        duration={500}
                        onClick={handleNavBar}>
                        Recent Works
                    </Link>
                </li>
                <li className="animated fadeInRight">
                    <Link
                        activeClass="active"
                        className="nav-links"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={10}
                        duration={500}
                        onClick={handleNavBar}>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav >
    )
}