import React from "react";
import "./info.css";
import img from '../../Images/pexels-mikotoraw-photographer-3769099.jpg';
function Info() {
  return (
    <>
      <div className="container info">     
        <div className="row">
          <div className="col-sm-6 mt-5 mb-5" style={{'height':'400px'}}>
            <img
              src={img}
              alt="info_img"
              classNameName="info_img img-fluid"
              style={{ height: "60vh" }}
            />
          </div>
          <div className="col-sm-6" style={{'height':'400px'}}>
            <div className="h-100 mt-5   d-flex flex-column justify-contnet-center align-item-center">
            <h2 className="text-center">Lorem ipsum dolor</h2>
            <p className=" text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
             
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            </div>
           
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Info;
