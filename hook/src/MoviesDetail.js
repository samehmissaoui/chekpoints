import React from "react";
import { useParams, Link } from "react-router-dom";
import Movies from "./Movies";

const MovieDetail = () => {
  const { id } = useParams();
  const movie = Movies[Number(id)];

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailerLink}
        title={movie.title}
        frameborder="0"
        allowfullscreen
      ></iframe>
      <Link to="/">Go back to home</Link>
    </div>
  );
};

export default MovieDetail;