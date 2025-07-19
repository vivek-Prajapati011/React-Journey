import React from "react";

const Input = ({onMovieChange}) => {
    const handleInputChange = (e) => {
        onMovieChange(e.target.value)
    }

return (
    <div>
        <input 
           type="text"
           onChange={handleInputChange}
        />

    </div>
)

}

export default Input