import React from "react";
import { useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";

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
      <div>
        <img src={movieData.image} alt="" />
        <h1>{movieData.name}</h1>
      </div>
    </div>
  );
};

export default Movie_Page;
