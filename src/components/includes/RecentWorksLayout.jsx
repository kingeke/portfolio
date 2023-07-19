export default function RecentWorksLayout({ work, handleShow, index }) {
    return (
        <div className="card text-dark mt-3 mb-3 shadow" onClick={() => handleShow(index)}>
            <img src={work.images[0]} className="card-img-top img-fluid" alt={work.title} />
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className="card-title">{work.title}</h5>
                    <button className="btn btn-dark mb-2" href={work.link} onClick={() => handleShow(index)}>View</button>
                </div>
            </div>
        </div>
    );
}
