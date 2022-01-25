import React from "react";
import { Link } from "react-router-dom";
import { BsMusicNoteList } from "react-icons/bs";
import { BsMusicPlayerFill } from "react-icons/bs";
import { BsFillShareFill } from "react-icons/bs";
function Features() {
  return (
    <div className="mt-5">
      <h1 className="text-center mt-2" style={{ fontWeight: "bold" }}>
        Features
      </h1>
      <div className="container p-3" style={{ marginTop: "1rem" }}>
        <div className="row p-5 ">
          <div className="col-sm-4 mt-2">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                border: "1px black",
              }}
            >
              <div className="card bg-dark">
                <img
                  src="https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h2  data-testid = "manage" className="text-center" style={{ color: "white" }}>
                    Manage Songs
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 mt-2">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <div className="card bg-dark" >
                <img
                  src="https://images.pexels.com/photos/4491533/pexels-photo-4491533.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h2  data-testid = "create" className=" text-center" style={{ color: "white" }}>
                    Create Playlist
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 mt-2">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              
              
              <div className="card bg-dark" style={{'width':'18rem'}}>
                <img src="https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=950" className="card-img-top" alt="share" />
                <div className="card-body">
                <h2 data-testid = "share" className="text-center" style={{'color':'white'}}>Share</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
