import React from "react";
import { useLocation } from "react-router-dom";
import star from "../../assets/star.png";
import wstar from "../../assets/white-star.png";
import logo from "../../assets/logo.png";

const Movie_Page = () => {
  const location = useLocation();
  const { image, name, year, director, cast, writers, rating, description } =
    location.state || {};

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
        <div className="flex justify-between items-center me-4 pr-6">
          <div className="mt-3 px-6 ms-4">
            <h1 className="text-4xl font-stylish">{name}</h1>
            <p className="text-sm pt-1">{year}</p>
          </div>
          <div className="flex gap-4 font-robo text-md font-semibold">
            <div>
              <h1>IMDb Rating</h1>
              <div className="flex gap-1 items-center justify-center">
                <img src={star} alt="" className="w-5" />
                <p className="">{rating}</p>
              </div>
            </div>
            <div>
              <h1>Your Rating</h1>
              <div className="flex gap-1 items-center justify-center">
                <img src={wstar} alt="" className="w-6" />
                <p>Rate</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 px-6 ms-4">
          <img src={image} alt="" className="w-[37vw]" />
        </div>
        <div className="font-stylish">
          <div className="px-6 ms-4 mt-6 text-lg w-[70vw] ">
            <p className="text-justify">{description}</p>
          </div>
          <div className="flex gap-5 ms-4 px-6 mt-6 items-center">
            <h1 className="text-xl font-semibold">Director</h1>
            <p className="text-cyan-600 text-lg">{director}</p>
          </div>
          <div className="flex gap-5 ms-4 px-6 mt-6 items-center">
          <h1 className="text-xl font-semibold">Cast</h1>
          <p className="text-cyan-600 text-lg">{cast}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie_Page;
