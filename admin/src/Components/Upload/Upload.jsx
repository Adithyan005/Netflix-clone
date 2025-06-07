import React, { useRef, useState } from "react";

const Upload = () => {
  const [type, setType] = useState("");
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

  const fileref = useRef(null);

  const handlesubmit=()=>{
    const file=fileref.current?.values[0];
    console.log(file)
  }

  return (
    <div>
      <div className="flex justify-center items-center p-4 font-medium">
        <h1 className="text-2xl font-stylish">Upload Movies</h1>
      </div>
      <div>
        <form onSubmit={handlesubmit}>
          <div className="bg-yellow-100">
            <div>
              <label htmlFor="">
                <input
                  type="radio"
                  name=""
                  value="opt1"
                  checked={type === "opt1"}
                  onChange={(e) => setType(e.target.value)}
                />
                Blockbuster
              </label>
              <label htmlFor="">
                <input
                  type="radio"
                  name=""
                  value="opt2"
                  checked={type === "opt2"}
                  onChange={(e) => setType(e.target.value)}
                />
                Only on Netflix
              </label>
            </div>
            <div>
              <input
                type="file"
                placeholder="image"
                ref={fileref}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="name"
                value="name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="year"
                value="year"
                onChange={(e) => setYear(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="duration"
                value="duration"
                onChange={(e) => setDuration(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="director"
                value="director"
                onChange={(e) => setDirector(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="cast"
                value="cast"
                onChange={(e) => setCast(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="writers"
                value="writers"
                onChange={(e) => setWriters(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="rating"
                value="rating"
                onChange={(e) => setRating(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="description"
                value="description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="trailerurl"
                value="trailerurl"
                onChange={(e) => setTrailerurl(e.target.value)}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Upload;
