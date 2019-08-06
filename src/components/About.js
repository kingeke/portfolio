import React from 'react'
import SkillsLayout from './includes/SkillsLayout';
import { AnimatedOnScroll } from "react-animated-css-onscroll";

export default function About({ skills }) {
    return (
        <div id="about">
            <AnimatedOnScroll animationIn="fadeInUp">
                <div className="row p-sm-5 pt-5 pb-5">
                    <div className="col-12">
                        <h1 className="text-center">About Me</h1>
                        <p> A hardworking and straight forward individual, a quick learner with excellent listening and understanding skills. I believe in professionalism which makes me effectively talented and able to function adequately under pressure. I am a quick learner and can easily research and find what I need to learn and to do in order to complete a task. I am capable of working with people as well as individually to produce excellent results. A people person, very sociable and highly innovative. </p>
                    </div>
                    <div className="col-12 mt-3 text-center">
                        <h1>Skills</h1>
                    </div>
                    <div className="col-12">
                        <div className="nav nav-tabs nav-fill">
                            {
                                skills.map((item, index) => {
                                    return (
                                        <a className={`nav-item nav-link ${index === 0 ? 'active' : ''}`} key={index} data-toggle="tab" href={`#${item.name}`}>{item.name}</a>
                                    )
                                })
                            }
                        </div>
                        {
                            skills.map((item, index) => {
                                return (
                                    <div key={index} className={`tab-pane fade pt-5 pb-5 ${index === 0 ? 'show active' : ''}`} id={item.name} role="tabpanel">
                                        <div className="row">
                                            <SkillsLayout key={index} skills={item.skills} />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </AnimatedOnScroll>
        </div>
    )
}
