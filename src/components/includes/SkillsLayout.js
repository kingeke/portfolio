import React, { Fragment } from 'react'

export default function SkillsLayout({ skills }) {
    return (
        <Fragment>
            {
                skills.map((skill, index) => {
                    return (

                        <div className="col-md-3 col-sm-4 col-6 pt-3 p-0 pb-3 text-center border" key={index}>
                            {
                                skill.type === 'i' ?
                                    <i className={`skill ${skill.icon}`}></i> :
                                    <img src={skill.icon} width="80" alt={skill.name} />
                            }

                            {
                                skill.title ? <p>{skill.title}</p> : null
                            }
                        </div>
                    )
                })
            }
        </Fragment>
    )
}
