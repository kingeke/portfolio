import React from 'react'

export default function RecentWorksLayout({ image, title, link, handleShow, index }) {
    return (
        <div className="card text-dark mt-3 mb-3 shadow" onClick={() => handleShow(index)}>
            <img src={image} className="card-img-top" alt={title} />
            <div className="card-body">
                <div className="row">
                    <div className="col-sm-6 my-auto" style={{ marginLeft: '-15px' }}>
                        <h5 className="card-title">{title}</h5>
                    </div>
                    <div className="col-sm-6 text-sm-right">
                        <button className="btn btn-dark mb-2" style={{ marginRight: '-15px' }} href={link} onClick={() => handleShow(index)}>View</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
