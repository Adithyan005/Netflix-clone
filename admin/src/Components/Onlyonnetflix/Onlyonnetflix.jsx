import React from "react";
import { useState } from "react";
import axios from "axios";

const Onlyonnetflix = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [duration, setDuration] = useState("");
  const [director, setDirector] = useState("");
  const [cast, setCast] = useState("");
  const [writers, setWriters] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const [trailerurl, setTrailerurl] = useState("");

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://netflix-clone-backend-vas2.onrender.com/api/flix/onlynetflix",
        {
          image,
          name,
          year,
          duration,
          director,
          cast,
          writers,
          rating,
          description,
          trailerurl,
        }
      );
      console.log("inserted");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center p-4 font-medium">
        <h1 className="text-2xl font-stylish">Only on Netflix Movies</h1>
      </div>
      <div>
        <form onSubmit={handlesubmit}>
          <div className="shadow-xl py-6 bg-black w-[35vw] mx-auto rounded-xl text-white">
            <div className="p-2 flex gap-3 justify-evenly">
              <label htmlFor="">Image Link</label>
              <input
                type="text"
                onChange={(e) => setImage(e.target.value)}
                name="image"
                className="w-[20vw] h-8 p-1 border rounded-md"
              />
            </div>
            <div className="flex p-2 gap-2 items-center justify-evenly">
              <label htmlFor="">Name</label>
              <br />
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                name="name"
                className="w-[20vw] h-8 p-1 border rounded-md"
              />
            </div>
            <div className="p-2 flex gap-14 items-center justify-evenly">
              <label htmlFor="">Year</label>
              <input
                type="text"
                name="year"
                className="w-[20vw] h-8 p-1 border rounded-md "
                onChange={(e) => setYear(e.target.value)}
              />
            </div>
            <div className="p-2 flex gap-7 items-center justify-evenly">
              <label htmlFor="">Duration</label>
              <input
                type="text"
                name="duration"
                className="w-[20vw] h-8 p-1 border rounded-md"
                onChange={(e) => setDuration(e.target.value)}
              />
            </div>
            <div className="p-2 flex gap-8 items-center justify-evenly">
              <label htmlFor="">Director</label>
              <input
                type="text"
                name="director"
                className="w-[20vw] h-8 p-1 border rounded-md"
                onChange={(e) => setDirector(e.target.value)}
              />
            </div>
            <div className="p-2 flex gap-[4.5vw] items-center justify-evenly">
              <label htmlFor="">Cast</label>
              <input
                type="text"
                name="cast"
                className="w-[20vw] h-8 p-1 border rounded-md"
                onChange={(e) => setCast(e.target.value)}
              />
            </div>
            <div className="p-2 flex gap-10 items-center justify-evenly">
              <label htmlFor="">Writers</label>
              <input
                type="text"
                name="writers"
                className="w-[20vw] h-8 p-1 border rounded-md"
                onChange={(e) => setWriters(e.target.value)}
              />
            </div>
            <div className="p-2 flex gap-11 items-center justify-evenly">
              <label htmlFor="">Rating</label>
              <input
                type="text"
                name="rating"
                className="w-[20vw] h-8 p-1 border rounded-md"
                onChange={(e) => setRating(e.target.value)}
              />
            </div>
            <div className="p-2 flex gap-3 items-center justify-evenly">
              <label htmlFor="">Description</label>
              <input
                type="text"
                name="description"
                className="w-[20vw] h-8 p-1 border rounded-md"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="p-2 flex gap-5 items-center justify-evenly">
              <label htmlFor="">Trailer URL</label>
              <input
                type="text"
                name="trailerurl"
                className="w-[20vw] h-8 p-1 border rounded-md"
                onChange={(e) => setTrailerurl(e.target.value)}
              />
            </div>
            <div className="flex justify-center items-center pt-4 ">
              <button className="bg-red-600 px-3 py-1 rounded-lg">
                Upload
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Onlyonnetflix;
