import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Title_Card = (props) => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    async function fetchdata() {
      try {
        const response = await axios.get("https://netflix-clone-backend-vas2.onrender.com/movies");
        setdata(response.data);
      } catch (error) {
        console.log("error in the data fetch title_Card");
      }
    }
    fetchdata();
  });
  const navigate = useNavigate();
  const handleclick = async (movieid) => {
    try {
      const response = await axios.get(
        `https://netflix-clone-backend-vas2.onrender.com/api/popular/movies/${movieid}`
      );

      if (response.status == 200) {
        navigate("/moviepage", { state: { array: response.data } });
      }
    } catch (error) {
      console.log("error in the obtaining data");
    }
  };

  return (
    <div className="text-white font-stylish text-md">
      <h1 className="text-xl mt-8 font-semibold ">{props.title}</h1>
      <div className="ms-4 flex justify-center">
        <div className="scr w-[210vh] overflow-x-scroll mt-4">
          <div className="flex w-[500vh] gap-3">
            {data.map((card, index) => {
              return (
                <div
                  key={index}
                  className="text-white"
                  onClick={() => handleclick(card._id)}
                >
                  <img
                    src={card.image}
                    alt=""
                    className="w-[40vw] cursor-pointer"
                  />
                  <p className="font-stylish text-sm">{card.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title_Card;
