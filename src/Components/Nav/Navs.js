import React from "react";
import './Navbar.css';

function Navs() {
  return (
    <>
    
      <nav class="navbar navbar-expand-lg navbar-dark" >
        <a class="navbar-brand" href="#">
         Logo
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse item_div" id="navbarTogglerDemo02">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#" style={{color:'white'}}>
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#" style={{color:'white'}}>
                Playlist
              </a>
            </li>
            <li class="nav-item active" >
              <a class="nav-link " href="#" style={{color:'white'}}>
                Contact Us
              </a>
            </li>
          </ul>
          <button class="btn btn-outline-light" >
            Login/SignUp
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navs;
