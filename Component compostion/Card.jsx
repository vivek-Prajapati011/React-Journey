import React from "react";

const Card = ({children}) => {
     const style = {
    width: "250px",
    border: "1px solid #ddd",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "16px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#fff",
    textAlign: "center",
  }
   return (
    <div style={style}>{children} </div>
   )
}

export default Card