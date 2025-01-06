import React from "react";
import card_data from "../Cards_Data/Cards_Data";
import { useNavigate } from "react-router-dom";

const Title_Card = (props) => {
  const navigate = useNavigate();
  const handleclick = (image, name, year, director, cast, writers, rating, description) => {
    navigate("/moviepage", { state: { image, name, year, director, cast, writers, rating,  description} });
  };

  return (
    <div className="text-white font-stylish text-md">
      <h1 className="text-xl mt-8 font-semibold">{props.title}</h1>
      <div className="ms-4 flex justify-center">
        <div className="scr w-[210vh] overflow-x-scroll mt-4">
          <div className="flex w-[500vh] gap-3">
            {card_data.map((card, index) => {
              return (
                <div
                  key={index}
                  className="text-white"
                  onClick={() => {
                    handleclick(card.image, card.name, card.year, card.director, card.cast, card.writers, card.rating, card.description);
                  }}
                >
                  <img
                    src={card.image}
                    alt=""
                    className="w-[40vw] cursor-pointer"
                  />
                  <p className="font-stylish">{card.name}</p>
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
