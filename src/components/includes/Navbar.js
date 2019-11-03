import React from 'react'
import { avatar } from './Pictures';
import { Link } from "react-scroll";

export default function Navbar({ handleNavBar }) {

    const links = [
        {
            title: 'Home',
            to: 'home',
            animation: 'Left'
        },
        {
            title: 'About',
            to: 'about',
            animation: 'Right'
        },
        {
            title: 'Recent Works',
            to: 'recent-works',
            animation: 'Left'
        },
        {
            title: 'Contact',
            to: 'contact',
            animation: 'Right'
        }
    ]

    return (
        <nav className="side-nav">
            <img src={avatar} alt="Avatar" className="avatar shadow animated fadeIn delay-1s" />
            <ul>
                {
                    links.map((item, index) => (
                        <li key={index} className={`animated fadeIn${item.animation}`}>
                            <Link
                                activeClass="active"
                                className="nav-links"
                                to={item.to}
                                spy={true}
                                smooth={true}
                                duration={500}
                                onClick={handleNavBar}>
                                {item.title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}
