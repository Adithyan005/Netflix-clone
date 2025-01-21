import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import play from "../../assets/play.png";
import info1 from "../../assets/info1.png";
import Title_Card from "../Title_Card/Title_Card";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
  }, []);

  const navigate = useNavigate();
  const handleclick = async (movieid) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/movies/${movieid}`
      );

      if (response.status == 200) {
        navigate("/moviepage", { state: { array: response.data } });
      }
    } catch (error) {
      console.log("error in the obtaining data");
    }
  };

  return (
    <div className="relative">
      {home.map((card, index) => {
        return (
          <div
            key={index}
            style={{
              backgroundImage: `url(${card.bgimage})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: "100vh",
              color: "black",
            }}
          >
            <Navbar />

            <div className="pt-16">
              <img src={card.titleimage} alt="" className="w-[35vw]" />
              <div className="w-[45vw] ms-4 px-6 ">
                <p className="text-white font-stylish text-justify">
                  {card.description}
                </p>
              </div>
            </div>

            <div className="  left-8 pt-5 flex gap-5 ms-10">
              <div
                className="bg-white w-[6rem] font-stylish text-xs font-bold h-8 flex justify-center items-center hover:bg-[#ffffffbf]"
                onClick={() => handleclick(card.matchstring)}
              >
                <img src={play} alt="" className="w-9 pointer-events-none" />
                <button   className="cursor-pointer">Play</button>
              </div>
              <div className="bg-[#6d6d6eb3] text-white flex justify-center items-center font-bold gap-1 w-[6.5rem] h-8 text-xs hover:bg-[#6d6d6e66]">
                <img src={info1} alt="" className="w-8" />
                <p>More info</p>
              </div>
            </div>
          </div>
        );
      })}

      <div className="absolute left-8 grid-cols-2 top-[62vh]">
        <div className="mt-[5rem] ms-2 mb-[1rem]">
          <Title_Card title={"Popular on Netflix"} />
          <Title_Card title={"Blockbuster Movies"} />
          <Title_Card title={"Only on Netflix"} />
          <Title_Card title={"Upcoming"} />
          <Title_Card title={"Top Picks for you"} />
        </div>
      </div>
    </div>
  );
};

export default Home;
