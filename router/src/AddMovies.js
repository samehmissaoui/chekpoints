import React, { useState } from "react";
import Badge from 'react-bootstrap/Badge';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Rating from '@mui/material/Rating';

function AddMovies({ addMovie }) {
    const [show, setShow] = useState(false);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState(0);
    const [posterURL, setPosterURL] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleclic = () => {
        addMovie({ title, description, posterURL, rating });
        handleClose();
    };
    return (
        <>
            <Button variant="contained" color="success" startIcon={<AddIcon/>} onClick={handleShow}>Add movie</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Movies</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextTitle">
                            <Col sm="10">
                                <Form.Control type="text" placeholder="Movie title"
                                    name="title"
                                    required
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPosterURL">
                            <Col sm="10">
                                <Form.Control type="text" placeholder="Movie poster path"
                                    name="posterURL"
                                    required
                                    onChange={(e) => setPosterURL(e.target.value)}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextDescription">
                            <Col sm="10">
                                <Form.Control as="textarea" rows={3} placeholder="Movie description"
                                    name="description"
                                    required
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextRating">
                            <Form.Label column sm="4">
                                Rate your movie
                            </Form.Label>
                            <Col sm="8">
                                <Badge bg="secondary">
                                    <Rating
                                        name="half-rating"
                                        value={rating}
                                        precision={0.5}
                                        onChange={(event, newValue) => {
                                            setRating(newValue);
                                        }}
                                    />
                                </Badge>
                            </Col>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="contained" color="success" startIcon={<SaveIcon/>} onClick={handleclic}>
                        Save Movie
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default AddMovies;
