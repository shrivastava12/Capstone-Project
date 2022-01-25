import React from "react";
import img from "../Images/Music.svg";
function KuchBhi() {
  return (
    <div style={{ height: "auto" }}>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6 " style={{ height: "auto" }}>
            <div className="text-center " className="">
              <img src={img} alt="info_img" className="" height={300} />
            </div>
          </div>
          <div className="col-lg-6 mt-5" style={{ height: "auto" }}>
            <p className=" text-center" style={{'fontSize':'2.2rem'}}>
            “Music is what tells us that the human race is greater than we realize.”
            </p>
            <p className=" text-right" style={{'fontSize':'1.3rem'}}>― Napoleon Bonaparte</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KuchBhi;
