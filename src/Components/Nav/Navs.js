import React from "react";
import "./Navbar.css";
import logo from "../../Images/logo.png";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/authAction";
import { CgProfile } from "react-icons/cg";

function Navs({ isAuthenticated, user, logout }) {
  // let handleClick = () =>{
  //     return <Redirect to='/login'/>
  // // }
  // console.log('user',user.email)
  return (
    <>
      <nav className="navbar bg-dark navbar-expand-lg navbar-dark sticky-top">
        <a className="navbar-brand" href="#">
          <img src={logo} width={70} height={70} />
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
          className="collapse navbar-collapse"
          id="navbarTogglerDemo02"
        >
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active">
              <Link
                className="nav-link"
                href="#"
                style={{ color: "white" }}
                to="/"
              >
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
              <Link
                className="nav-link"
                style={{ color: "white" }}
                to="/playlist"
              >
                Playlist
              </Link>
            </li>
            <li className="nav-item active">
              <Link
                className="nav-link "
                style={{ color: "white" }}
                to="/contact"
              >
                Contact Us
              </Link>
            </li>
          </ul>
          {isAuthenticated ? (
            <div style={{ display: "flex" }}>
              <Link to="/profile">
                <span
                  style={{ display: "flex", cursor: "pointer" }}
                >
                  <CgProfile color="grey" size={25} />
                  <p style={{ color: "white" }}>
                    {user.first_name + " " + user.last_name}
                  </p>
                </span>
              </Link>

              <button
                style={{ height: "28px" }}
                className="btn btn-light btn-sm ml-2"
                onClick={logout}
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn btn-outline-light">Login/SignUp</button>
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});

export default connect(mapStateToProps, { logout })(Navs);
