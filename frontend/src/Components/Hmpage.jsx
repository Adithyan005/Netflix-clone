import React, { useEffect, useState } from "react";
import axios from "axios";

const Hmpage = () => {
  const [home, setHome] = useState([]);
  useEffect(() => {
    async function homedata() {
      try {
        const response = await axios.get("http://localhost:4000/homemovie");
        setHome(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    homedata();
  });

  const bgstyle={
    width:"90vw",
    height:"100vh",
    backgroundPosition:"center",
    backgroundSize:"cover"
  }

  return (
    <div>
      {home.map((data, index) => {
        return (
          <div key={index} className="text-white w-[90vw] h-[100vh]">
            <div style={bgstyle}>
            <img src={data.bgimage} alt="" />
            </div>
            <img src={data.titleimage} alt="" />
            <p>{data.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Hmpage;
