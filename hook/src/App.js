import React, { useState } from "react";
import "./App.css";
import Movieslist from "./MovieList";
import FilterMovie from "./FilterMovies";
import MoviesData from "./Movies";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieDetail from "./MoviesDetail";


function App() {
  const [Movies, setMovies] = useState(MoviesData)
  const [filterByTitle, setFilterByTitle] = useState("")
  const [filterByRating, setFilterByRating] = useState(0)

  const addMovie = (newMovie) => {
    setMovies([newMovie, ...Movies]);
  };
  return (
    <Router>
    <div className="App">
      <div className="row">
        <Routes>
        <Route path="/movie/:id" element={<MovieDetail/>}/>
              
            
            <Route path="/"
            element={
        <FilterMovie
          setFilterByTitle={setFilterByTitle}
          setFilterByRating={setFilterByRating}
          rating={filterByRating}
          addMovie={addMovie}
        />}/>
        
        </Routes>
      </div>
      <div className="row">
        <Movieslist
          moviesList={Movies}
          titlefilter={filterByTitle}
          ratingfilter={filterByRating}
        />
        
      </div>
    </div></Router>
  );
};

export default App;