import React from "react";
import Home from "./Components/Home/Home";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Movie_Page from "./Components/Movie_Page/Movie_Page";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";

const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/moviepage" element={<Movie_Page/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
};

export default App;
