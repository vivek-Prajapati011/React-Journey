import React, { useEffect, useState } from "react";

const Loader = () => {
  const [imageUrl, setImageUrl] = useState("");

  const DataFetch = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setImageUrl(data.message); // Set the image URL from the API response
    } catch (error) {
      console.error("Failed to fetch dog image:", error);
    }
  };

  useEffect(() => {
    DataFetch();
  }, []);

  return (
    <div>
      {imageUrl ? (
        <img src={imageUrl} alt="A cute dog" style={{ width: "300px" }} />
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default Loader;
cd