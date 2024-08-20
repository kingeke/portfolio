import React, { Fragment } from 'react';

export default function SkillsLayout({ skills }) {
    return (
        <Fragment>
            {
                skills.sort((a, b) => a.name.localeCompare(b.name)).map((skill, index) => {
                    return (

                        <div
                            className="col-md-3 col-sm-4 col-6 border d-flex justify-content-center flex-column align-items-center p-3"
                            key={index}
                            title={skill.name}
                        >
                            {
                                skill.type === 'i' ?
                                    <i className={`skill ${skill.icon}`}></i> :
                                    <img src={skill.icon} width="80" alt={skill.name} />
                            }

                            {
                                skill?.name && !skill.hideName && <p className='m-0 pt-1'>{skill.name}</p>
                            }
                        </div>
                    );
                })
            }
        </Fragment>
    );
}
