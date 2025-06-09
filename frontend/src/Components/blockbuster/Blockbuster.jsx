import React, { useEffect, useState } from "react";
import axios from "axios";

const Blockbuster = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    async function fetchmovie(req, res) {
      try {
        const result = await axios.get(
          "https://netflix-clone-backend-vas2.onrender.com/api/buster/bbmovies"
        );
        setList(result.data.blkbstrmovies);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
    fetchmovie();
  }, []);

  return (
    <div className="">
      <div className="flex items-center justify-center p-5">
        <h1 className="font-stylish text-xl font-medium text-white">
          Blockbuster Movies
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-8 p-7">
        {list.map((card, index) => {
          return (
           
              <div key={index} className="rounded-xl bg-white h-[50vh]">
                <img src={card.image} alt="" className="w-full h-[40vh] object-cover" />
                <div className="p-3 flex justify-between items-center">
                  <h1 className="font-stylish font-medium">{card.name}</h1>
                  <button className="px-3 py-2 bg-blue rounded-md text-white">See more</button>
                </div>
              </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blockbuster;
