import React from "react";

const Upload = () => {
  return (
    <div>
      <div>
        <h1>Upload Your Movies</h1>
        <div className="w-full h-fit mx-auto bg-amber-100">
          <form action="">
            <div>
              <div className="py-3">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter Movie name"
                  className="w-[25vw] h-9"
                />
              </div>
              <div className="py-3">
                <input type="number" name="" id="" placeholder="Enter Release Year" className="w-[25vw] h-9"/>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Upload;
