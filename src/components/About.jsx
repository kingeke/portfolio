import React from 'react';
import SkillsLayout from './includes/SkillsLayout';
import { AnimatedOnScroll } from "react-animated-css-onscroll";

export default function About({ skills }) {
    return (
        <div id="about">
            <AnimatedOnScroll animationIn="fadeInUp">
                <div className="row p-sm-5 pt-5 pb-5">
                    <div className="col-12">
                        <h1 className="text-center">About Me</h1>
                        <p> Engineering Manager with over a decade of experience leading and scaling engineering teams and delivering
                            high-impact fintech and SaaS products. Led teams of up to 6 engineers, shipping platforms serving tens of thousands
                            of users while improving system reliability and delivery predictability. Drove a 40% reduction in application load
                            times, cut production incidents by ~20%, and increased team delivery velocity by 30% through architectural
                            modernization, better engineering practices, and clear technical direction. Successfully modernized monolithic
                            systems into modular services, enabling faster releases, independent deployments, and improved operational
                            stability. Combines strong people leadership with deep technical judgment to consistently turn complex business
                            goals into measurable outcomes. </p>
                    </div>
                    <div className="col-12 mt-3 text-center">
                        <h1>Skills</h1>
                    </div>
                    <div className="col-12">
                        <ul className="nav nav-tabs nav-fill" role="tablist">
                            {
                                skills.map((item, index) => {
                                    return (
                                        <li className="nav-item" key={index}>
                                            <a className={`nav-link ${index === 0 ? 'active' : ''}`} data-toggle="tab" href={`#${item.name}`}>{item.name}</a>
                                        </li>
                                    );
                                })
                            }
                        </ul>

                        <div className="tab-content">
                            {
                                skills.map((item, index) => {
                                    return (
                                        <div key={index} className={`tab-pane fade pt-5 pb-5 ${index === 0 ? 'show active' : ''}`} id={item.name} role="tabpanel">
                                            <div className="row">
                                                <SkillsLayout key={index} skills={item.skills} />
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </AnimatedOnScroll>
        </div>
    );
}
