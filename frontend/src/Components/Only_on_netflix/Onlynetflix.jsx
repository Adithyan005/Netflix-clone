import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Onlynetflix = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchmovie(req, res) {
      try {
        const result = await axios.get(
          "https://netflix-clone-backend-vas2.onrender.com/api/flix/onlyonnetflix"
        );
        console.log(result);
        setMovie(result);
      } catch (error) {
        console.log(error);
      }
    }
    fetchmovie();
  }, []);

  return (
    <div>
      <h1>hello</h1>
      <div>
        {movie.map((card, index) => {
          return (
            <div key={index}>
              <h1>{card.name}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Onlynetflix;
