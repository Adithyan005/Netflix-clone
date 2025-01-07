import React from "react";
import { useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import star from "../../assets/star.png";
import wstar from "../../assets/white-star.png";

const Movie_Page = () => {
  const location = useLocation();
  const movieData = location.state.array || {};

  console.log("movie page", movieData);
  return (
    <div className="text-white">
      <div className="flex justify-between items-center">
        <div className="ms-4 px-6 py-4">
          <img src={logo} alt="" className="w-[6rem]" />
        </div>
        <div>
          <ul className="flex gap-4 px-6 me-4 py-4 font-robo font-semibold text-lg">
            <li>
              <a href="#">Cast & Crew</a>
            </li>
            <li>
              <a href="#">User Reviews</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between items-center gap-10 mt-5 ms-4 me-4 px-6">
        <div className="font-stylish">
          <h1 className="text-2xl font-semibold">{movieData.name}</h1>
          <div className="flex gap-4 text-sm">
            <p>{movieData.year}</p>
            <p>{movieData.duration}</p>
          </div>
        </div>
        <div className="flex gap-5 font-robo font-semibold">
          <div>
            <h1>IMDb Rating</h1>
            <div className="flex gap-1 justify-center items-center text-md">
              <img src={star} alt="" className="w-6" />
              <p>{movieData.rating}/10</p>
            </div>
          </div>
          <div>
            <h1>Your Rating</h1>
            <div className="flex gap-1 items-center justify-center text-md">
              <img src={wstar} alt="" className="w-5" />
              <p>Rate</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={movieData.image} alt="" className="w-[50vw]"/>
        <h1>{movieData.name}</h1>
      </div>
    </div>
  );
};

export default Movie_Page;
