import React from "react";
import { BsFacebook } from "react-icons/bs";
import {BsInstagram} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';

function Footer() {
  return (
      <>
     
    <div style={{ height: "380px", backgroundColor: "rgba(0, 0, 0, 0.78)" }}>
   
      <div className="container">
        <div className="row p-4">
          <div className="col-lg-6">
            <h2 style={{'color':'#fff'}} className="mb-3">Service</h2>
            <input />
            <button
              className="ml-2"
              style={{
                borderRadius: "18px",
            minWidth: "20%",
                border:'2px solid red'
              }}
            >
              Subscribe
            </button>
          </div>
          <div style={{'color':'#fff'}} className="col-lg-6">
            <h2 className="mb-3">Contact Us</h2>

            <p>Banglore,India</p>
            <p>+91 7479530699</p>
            <div className="d-flex flex-row  ">
              <div className=" "><BsFacebook size={30} /></div>
              <div className="ml-3"><BsInstagram size={30} /></div>
              <div className="ml-3"><BsTwitter size={30} /></div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
    <div style={{ backgroundColor: "rgba(0, 0, 0, 0.78)"}}>
        <p className="p-3 text-center" style={{color:'#fff'}}>Copyright ©2021 All rights reserved </p>
    </div>
    </>
  );
}

export default Footer;
