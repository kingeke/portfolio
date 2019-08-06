import React from 'react'
import { Modal, Button, Row, Col } from 'react-bootstrap'

export default function CustomModal({ show, size, handleClose, item }) {
    return (
        <Modal size={size} show={show} onHide={handleClose} animation scrollable>
            <Modal.Header closeButton>
                <Modal.Title>{item.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{item.description}</p>
                <p>Languages Used: {item.languages}</p>
                <p>Timeline: {item.timeline}</p>
                <p>Pictures:</p>
                <Row>
                    {
                        item && item.images.map((image, index) => {
                            return (
                                <Col sm={6} key={index} className="mt-3">
                                    <a href={image} target="_blank" rel="noopener noreferrer" >
                                        <img src={image} alt={item.title} className="img-fluid img-thumbnail" />
                                    </a>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close </Button>
                <a className="btn btn-primary" target="_blank" rel="noopener noreferrer" href={item.link}>Visit Site </a>
            </Modal.Footer>
        </Modal>
    )
}
