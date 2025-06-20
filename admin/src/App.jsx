import React from 'react'
import Blockbusterupload from './Components/Blockbusterupload/Blockbusterupload'
import Onlyonnetflix from './Components/Onlyonnetflix/Onlyonnetflix'
import {BrowserRouter,Routes,Route} from "react-router-dom"

const App = () => {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Blockbusterupload/>}/>  
        <Route path="/onlyflixupload" element={<Onlyonnetflix/>}/>
      </Routes>
      </BrowserRouter>
  )
}

export default App
