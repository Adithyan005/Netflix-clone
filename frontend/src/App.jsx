import React from "react";
import Home from "./Components/Home/Home";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Movie_Page from "./Components/Movie_Page/Movie_Page";

const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/moviepage" element={<Movie_Page/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
};

export default App;