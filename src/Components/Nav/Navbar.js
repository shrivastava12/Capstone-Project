import React from "react";
import "./Navbar.css";
import Navs from "./Navs";
//navbar component
function Navbar() {
  return (
    <div  className=" img-fluid" style={{height:'auto',color:'black'}}>
      <div className="navbar_div ">
        <Navs />
        <h1 className="navheading  h-75 d-flex justify-content-center align-items-center">
          MUSIQUE
        </h1>
      </div>
    </div>
  );
}

export default Navbar;
