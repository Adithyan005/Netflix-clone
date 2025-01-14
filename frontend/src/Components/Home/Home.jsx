import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import play from "../../assets/play.png";
import info1 from "../../assets/info1.png";
import Title_Card from "../Title_Card/Title_Card";
import axios from "axios";

const Home = () => {
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

  return (
    <div >
      <div className="">
        {home.map((card, index) => {
          return (
            <div className="relative"
              key={index}
              style={{
                backgroundImage: `url(${card.bgimage})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                height: "135vh",
                color:"black"
              }}
            >
              <div className="absolute">
                <Navbar/>
              </div>
              
            </div>
          );
        })}
      </div>

      <div className="absolute bottom-10 left-5 grid-cols-2 top-[40vh]">
        <div className="pt-5 flex gap-5">
          <div className="bg-white w-[6rem] font-stylish text-xs font-bold h-8 flex justify-center items-center hover:bg-[#ffffffbf]">
            <img src={play} alt="" className="w-9" />
            <p>Play</p>
          </div>
          <div className="bg-[#6d6d6eb3] text-white flex justify-center items-center font-bold gap-1 w-[6.5rem] h-8 text-xs hover:bg-[#6d6d6e66]">
            <img src={info1} alt="" className="w-8" />
            <p>More info</p>
          </div>
        </div>
        <div>
          <div>
            <Title_Card title={"Popular on Netflix"}/>
          </div>
        </div>
      </div>

      <div className="mt-[5rem] pl-4 ms-2">
        <Title_Card title={"Blockbuster Movies"} />
        <Title_Card title={"Only on Netflix"} />
        <Title_Card title={"Upcoming"} />
        <Title_Card title={"Top Picks for you"} />
      </div>
    </div>
  );
};

export default Home;
