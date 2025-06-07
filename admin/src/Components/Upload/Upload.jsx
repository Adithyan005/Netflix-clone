import React from "react";

const Upload = () => {
  return (
    <div>
      <div className="flex justify-center items-center p-4 font-medium">
        <h1 className="text-2xl font-stylish">Upload Movies</h1>
      </div>
      <div>
        <form action="">
          <div className="bg-yellow-100">
            <div>
              <input type="text" placeholder="image" />
            </div>
            <div>
              <input type="text" placeholder="name" />
            </div>
            <div>
              <input type="text" placeholder="year" />
            </div>
            <div>
              <input type="text" placeholder="duration" />
            </div>
            <div>
              <input type="text" placeholder="director" />
            </div>
            <div>
              <input type="text" placeholder="cast" />
            </div>
            <div>
              <input type="text" placeholder="writers" />
            </div>
            <div>
              <input type="text" placeholder="rating" />
            </div>
            <div>
              <input type="text" placeholder="description" />
            </div>
            <div>
              <input type="text" placeholder="trailerurl" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Upload;
