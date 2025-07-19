import React from "react";

const Input = ({onMovieChange}) => {
    const handleaInputChane = (e) => {
        onMovieChange(e.target.value)
    }

return (
    <div>
        <input 
           type="text"
           onChange={onMovieChange}
        />

    </div>
)

}

export default Input