import React from 'react';
import Emoji from './includes/Emoji';
import { AnimatedOnScroll } from 'react-animated-css-onscroll';

export default function Contact() {
    return (
        <div id="contact">
            <AnimatedOnScroll animationIn="bounceIn" animationOut="fadeOut">
                <div className="row vh-100">
                    <div className="col-12 my-auto p-5 text-center">
                        <h1>Contact Me</h1>
                        <h4>Interested in working with me? <Emoji symbol="😎" label="cool" /></h4>
                        <h4>Send me an email, let's connect! <Emoji symbol="😉" label="wink" /></h4>
                        <div className="d-flex justify-content-center gap-3">
                            <h5><i className="fas fa-envelope"></i> <a href="mailto:chinonsoeke@gmail.com" className="text-white">chinonsoeke@gmail.com</a></h5>
                        </div>
                        <h4>Remember, you're awesome !!!</h4>
                    </div>
                </div>
            </AnimatedOnScroll>
        </div>
    );
}
