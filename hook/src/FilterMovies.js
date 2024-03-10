import React from "react";
import './App.css'
import Badge from 'react-bootstrap/Badge';
import AddMovies from "./AddMovies";
import Rating from "@mui/material/Rating";
function FilterMovie({ setFilterByTitle, setFilterByRating, rating, addMovie }) {
    return (

        <div className="searchBar">
            <AddMovies addMovie={addMovie} />
            <input
                className="inputsearch"
                type="text"
                placeholder="Search movie by title"
                onChange={(e) => setFilterByTitle(e.target.value)}
            /><br />
            <Badge bg="secondary">
                <Rating
                    name="half-rating"
                    value={rating}

                    precision={0.5}
                    onChange={(event, newValue) => {
                        setFilterByRating(newValue);
                    }}
                />
            </Badge>
        </div>

    );
}

export default FilterMovie;