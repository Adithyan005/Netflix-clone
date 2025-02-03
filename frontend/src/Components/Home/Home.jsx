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
    <div className="md:relative relative">
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

            <div className="md:pt-16 pt-40">
              <img src={card.titleimage} alt="" className="md:w-[35vw] w-[80vw]" />
              <div className="md:w-[45vw] md:ms-4 md:px-6 w-[80vw] ms-3 px-6">
                <p className="md:text-white md:font-stylish md:text-justify text-white font-stylish text-justify">
                  {card.description}
                </p>
              </div>
            </div>

            <div className="md:pt-5 md:flex md:gap-5 md:ms-10 pt-5 flex gap-3 ms-10">
              <div
                className="md:bg-white md:w-[6rem] md:font-stylish md:text-xs md:font-bold md:h-8 md:flex md:justify-center md:items-center md:hover:bg-[#ffffffbf] bg-white w-[23vw] font-stylish text-sm font-bold h-8 flex justify-center items-center hover:bg-[#ffffffbf]"
                onClick={() => handleclick(card.matchstring)}
              >
                <img src={play} alt="" className="md:w-9 w-8" />
                <button   className="md:cursor-pointer cursor-pointer">Play</button>
              </div>
              <div className="md:bg-[#6d6d6eb3] md:text-white md:flex md:justify-center md:items-center md:font-bold md:gap-1 md:w-[6.5rem] md:h-8 md:text-xs md:hover:bg-[#6d6d6e66] bg-[#6d6d6eb3] text-white flex justify-center items-center font-bold gap-1 w-[30vw] h-8 text-sm hover:bg-[#6d6d6e66]" >
                <img src={info1} alt="" className="w-8" />
                <p className="">More info</p>
              </div>
            </div>
          </div>
        );
      })}

      <div className="md:absolute md:left-8  md:top-[62vh] absolute left-4 top-[73vh] ">
        <div className="md:mt-[5rem] md:ms-2 md:mb-[1rem] mt-[3rem] ms-2 mb-[2rem]">
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
