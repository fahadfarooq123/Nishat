import React from "react";
import Home from "./Home";
import "./Home.css"
import {Route,Routes} from "react-router-dom";


function  App()
{
  return(
    
    <>
    
      <Routes>
        <Route path={"/"} Component={Home}/>
      </Routes>

    </>
  )
}
export default App;