import axios from "axios";
import React, { useEffect, useState } from "react";

const Blockbuster = () => {
  const [block, setBlock] = useState([]);
  const [drop, setDrop] = useState(false);

  useEffect(() => {
    async function fetchmovie() {
      try {
        const response = await axios.get(
          "https://netflix-clone-backend-vas2.onrender.com/api/buster/bbmovies"
        );
        setBlock(response.data.blkbstrmovies);
        console.log(response.data.blkbstrmovies);
      } catch (error) {
        console.log(error);
      }
    }
    fetchmovie();
  }, []);

  return (
    <div className="text-white">
      <div>
        {block.map((data, index) => (
          <div key={index}>
            <h1>{data.name}</h1>
          </div>
        ))}
      </div>
      <div>
        <h1
          onMouseEnter={() => setDrop(true)}
          onMouseLeave={() => setDrop(false)}
        >
          dropdown
        </h1>
      </div>

      {drop && (
        <div className="flex-col gap-5 absolute top-9">
            <h1>blockbuster</h1>
            <h1>blockbuster</h1>
            <h1>blockbuster</h1>
        </div>
      )}
    </div>
  );
};

export default Blockbuster;
