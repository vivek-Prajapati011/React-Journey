import React from "react";
import { useState } from "react";
import Input from "./Input";
import MovieDisplay from "./MoiveDisplay";

const MovieManager = () => {
   const [moviename, setMovieName] = useState("")

   const handleMovieChange = (newName) => {
       setMovieName(newName )
   }

   return (
    <div>
      <h2> Movie Manager</h2>
      <Input onMovieChange={handleMovieChange} />
      <MovieDisplay movieName={moviename} />
    </div>
  )
}

export default MovieManager