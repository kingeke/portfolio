import React from 'react'

export default function RecentWorksLayout({ work, handleShow, index }) {
    return (
        <div className="card text-dark mt-3 mb-3 shadow" onClick={() => handleShow(index)}>
            <img src={work.images[0]} className="card-img-top img-fluid" alt={work.title} />
            <div className="card-body">
                <div className="row">
                    <div className="col-sm-8 my-auto" style={{ marginLeft: '-15px' }}>
                        <h5 className="card-title">{work.title}</h5>
                    </div>
                    <div className="col-sm-4 text-sm-right">
                        <button className="btn btn-dark mb-2" style={{ marginRight: '-15px' }} href={work.link} onClick={() => handleShow(index)}>View</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
