import React from "react";
import Navbar from "../Navbar/Navbar"
import maharaj from "../../assets/maharaj.jpg";
import mahr from "../../assets/mahr.png";
import play from "../../assets/play.png";
import info1 from "../../assets/info1.png";
import Title_Card from "../Title_Card/Title_Card";

const Home = () => {
  const container = {
    backgroundImage: `url(${maharaj})`,
    backgroundSize: "cover",
    backgroundPositon: "center",
    height: "110vh",
  };

  return (
    <div>
      <div style={container}>
        <div className="relative">
          <Navbar />
        </div>
        <div className="absolute bottom-10 left-5 grid-cols-2 top-[40vh]">
          <img src={mahr} alt="" className="w-[25rem]" />
          <p className="text-white font-stylish text-justify w-[35rem]">
            Karsan is a progressive thinker and social reformer in
            pre-independent Bombay, living with his maternal uncle and aunt
            after the death of his mother.
          </p>
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
      </div>
        <div className="mt-[5rem] pl-4 ms-2">
        <Title_Card title={"Blockbuster Movies"}/>
        <Title_Card title={"Only on Netflix"}/>
        <Title_Card title={"Upcoming"}/>
        <Title_Card title={"Top Picks for you"}/>
        </div>
    </div>
  );
};

export default Home;
