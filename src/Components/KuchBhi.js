import React from "react";
import img from "../Images/img1.png";
function KuchBhi() {
  return (
    <div style={{ height: "auto" }}>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6 " style={{ height: "auto" }}>
            <div className="text-center " className="">
              <img src={img} alt="info_img" classNameName="" height={300} />
            </div>
          </div>
          <div className="col-lg-6 mt-5" style={{ height: "auto" }}>
            <p className=" text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KuchBhi;
