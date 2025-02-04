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
      return `https://www.youtube.com/embed/${
        url.split("watch?v=")[1].split("&")[0]
      }`;
    } else if (url.includes("youtu.be/")) {
      return `https://www.youtube.com/embed/${url.split("youtu.be/")[1]}`;
    }
    return url; // If already in embed format or invalid, return as is
  };

  const trailerUrl = convertToEmbedUrl(movieData.trailerurl);

  return (
    <div className="text-white">
      {/* Header */}
      <div className="flex justify-between items-center px-3 py-4 md:px-6 md:py-4">
        <img src={logo} alt="Logo" className="w-[25vw] md:w-[6rem]" />
        <ul className="flex gap-3 text-sm font-semibold font-robo md:gap-4 md:text-lg">
          <li><a href="#">Cast & Crew</a></li>
          <li><a href="#">User Reviews</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>
      </div>

      {/* Movie Info */}
      <div className="flex justify-between gap-3 mt-3 px-3 md:flex-row md:justify-between md:items-center md:gap-10 md:mt-5 md:px-6">
        <div className="font-stylish">
          <h1 className="text-lg font-semibold md:text-2xl">{movieData.name}</h1>
          <div className="flex gap-2 text-sm md:gap-4">
            <p>{movieData.year}</p>
            <p>{movieData.duration}</p>
          </div>
        </div>
        <div className="flex justify-between gap-5 font-robo font-semibold md:gap-5">
          <div>
            <h1>IMDb Rating</h1>
            <div className="flex gap-1 items-center">
              <img src={star} alt="Star" className="w-5" />
              <p>{movieData.rating}/10</p>
            </div>
          </div>
          <div>
            <h1>Your Rating</h1>
            <div className="flex gap-2 items-center">
              <img src={wstar} alt="White Star" className="w-6" />
              <p>Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Image & Trailer */}
      <div className="flex flex-col gap-5 mt-5 px-5 md:flex-row md:justify-between md:items-center md:gap-4 md:mt-6 md:px-6">
        <img src={movieData.image} alt="Movie" className="w-[90vw] md:w-[35vw]" />
        <div className="px-4 md:px-6">
          {trailerUrl ? (
            <iframe
              width="100%"
              height="200"
              src={trailerUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="md:w-[770px] md:h-[380px]"
            ></iframe>
          ) : (
            <p className="text-red-500">Trailer not available</p>
          )}
        </div>
      </div>

      {/* Movie Description */}
      <div className="font-stylish text-justify mt-7 px-3 md:px-6 md:w-[70vw]">
        <p className="tracking-wide">{movieData.description}</p>
      </div>

      {/* Movie Details */}
      <div className="flex flex-col gap-5 mt-7 mb-6 px-3 text-lg md:flex-col md:gap-8 md:px-6">
        <div className="flex items-center gap-4 text-lg ">
          <h1 className="font-semibold text-lg md:text-xl">Director</h1>
          <p className="text-cyan-500">{movieData.director}</p>
        </div>
        <div className="flex items-center gap-5">
          <h1 className="font-semibold text-lg md:text-xl">Writers</h1>
          <p className="text-cyan-500">{movieData.writers}</p>
        </div>
        <div className="flex items-center gap-9">
          <h1 className="font-semibold text-lg md:text-xl">Stars</h1>
          <p className="text-cyan-500">{movieData.cast}</p>
        </div>
      </div>
    </div>
  );
};

export default Movie_Page;
