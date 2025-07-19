import React from "react";
import { useState } from "react";
import Input from "./Input";


const MovieManager = () => {
   const [moviename, setMovieName] = useState("")

   const handleMovieChange = (newName) => {
       setMovieName(newName )
   }

   return (
    <div>
      <h2> Movie Manager</h2>
      <MovieInput onMovieChange={handleMovieChange} />
      <MovieDisplay movieName={moviename} />
    </div>
  )
}

export default MovieManager