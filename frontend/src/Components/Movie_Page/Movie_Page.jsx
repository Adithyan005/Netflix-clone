import React from "react";
import { useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import star from "../../assets/star.png";
import wstar from "../../assets/white-star.png";

const Movie_Page = () => {
  const location = useLocation();
  const movieData = location.state.array || {};

  const convertToEmbedUrl = (url) => {
    if (!url) return "";
    if (url.includes("watch?v=")) {
      return `https://www.youtube.com/embed/${url.split("watch?v=")[1].split("&")[0]}`;
    } else if (url.includes("youtu.be/")) {
      return `https://www.youtube.com/embed/${url.split("youtu.be/")[1]}`;
    }
    return url; // If already in embed format or invalid, return as is
  };

  const trailerUrl = convertToEmbedUrl(movieData.trailerurl);

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
              <img src={star} alt="" className="w-5" />
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
      <div className="flex justify-start items-center gap-3 mt-6 ms-4 px-6">
        <div>
          <img src={movieData.image} alt="" className="w-[35vw]" />
        </div>
        <div className="me-4 px-6">
          {trailerUrl ? (
            <iframe
              width="770"
              height="380"
              src={trailerUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <p className="text-red-500">Trailer not available</p>
          )}
        </div>
      </div>
      <div className="font-stylish text-justify">
        <div className="mt-7 px-6 ms-4 w-[70vw] text-justify">
          <p className="tracking-wide">{movieData.description}</p>
        </div>
        <div className="flex gap-8 mt-7 px-6 ms-4 items-center">
          <h1 className="font-semibold text-xl">Director</h1>
          <p className="text-cyan-500">{movieData.director}</p>
        </div>
        <div className="flex gap-9 mt-7 px-6 ms-4 items-center">
          <h1 className="font-semibold text-xl">Writers</h1>
          <p className="text-cyan-500">{movieData.writers}</p>
        </div>
        <div className="flex gap-14 mt-7 mb-7 px-6 ms-4 items-center">
          <h1 className="font-semibold text-xl">Stars</h1>
          <p className="text-cyan-500">{movieData.cast}</p>
        </div>
      </div>
    </div>
  );
};

export default Movie_Page;
