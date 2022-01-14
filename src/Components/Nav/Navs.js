import React from "react";
import "./Navbar.css";
import logo from '../../Images/logo.png';
import { Link, Redirect } from "react-router-dom";
function Navs() {
  // let handleClick = () =>{
  //     return <Redirect to='/login'/>
  // }
  return (
    <>
      <nav className="navbar bg-dark navbar-expand-lg navbar-dark sticky-top">
        <a className="navbar-brand" href="#">
          <img  src={logo} width={70} height={70}/>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse item_div"
          id="navbarTogglerDemo02"
        >
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active">
              <Link className="nav-link" href="#" style={{ color: "white" }} to='/'>
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>

            <li className="nav-item active">
              <Link
                className="nav-link"
                href="#"
                style={{ color: "white" }}
                to="/song"
              >
                Songs
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" href="#" style={{ color: "white" }} to='/playlist'>
                Playlist
              </Link>
            </li>
            <li className="nav-item active">
              <a className="nav-link " href="#" style={{ color: "white" }}>
                Contact Us
              </a>
            </li>
          </ul>
          <Link to="/login">
            <button className="btn btn-outline-light">Login/SignUp</button>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navs;
