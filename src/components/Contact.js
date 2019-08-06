import React from 'react'
import Emoji from './includes/Emoji';
import { AnimatedOnScroll } from 'react-animated-css-onscroll';

export default function Contact() {
    return (
        <div id="contact">
            <AnimatedOnScroll animationIn="bounceIn" animationOut="fadeOut">
                <div className="row vh-100">
                    <div className="col-12 my-auto p-5 text-center">
                        <h1>Contact Me</h1>
                        <h4>Intersted in working with me? <Emoji symbol="😎" label="cool" /></h4>
                        <h4>Send an email or contact me on WhatsApp <Emoji symbol="😉" label="wink" /></h4>
                        <div className="row mt-4">
                            <div className="col text-right">
                                <h4><i className="fas fa-envelope"></i> <a href="mailto:chinonsoeke@gmail.com" className="text-white">chinonsoeke@gmail.com</a></h4>
                            </div>
                            <div className="col text-left">
                                <h4><i className="fas fa-phone"></i> +2347063944465</h4>
                            </div>
                        </div>
                        <h4>Remeber, you're awesome !!!</h4>
                    </div>
                </div>
            </AnimatedOnScroll>
        </div>
    )
}
