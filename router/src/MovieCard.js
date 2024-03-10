import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Badge from 'react-bootstrap/Badge';
import Rating from '@mui/material/Rating';


function MovieCard(props) {
  const movie = props.movie
  return (
    <Card  className="movie-card">
      <img src={movie.posterURL} alt="" />
      <Card.Body>
        <Card.Title className="text-success">{movie.title}</Card.Title>
        <Card.Text className="description-color" >
          {movie.description}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Stack direction="horizontal" gap={3}>
          <h6 className="p-2 description-color">Rating</h6>
          <div className="p-2 ms-auto">
            <Badge bg="secondary">
              <Rating name="half-rating-read" value={movie.rating} precision={0.5} readOnly />
            </Badge>
          </div>
        </Stack>
      </Card.Footer>
    </Card>
  );
}

export default MovieCard;