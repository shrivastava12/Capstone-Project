import React from "react";
import { BsMusicNoteList } from "react-icons/bs";
import { BsMusicPlayerFill } from "react-icons/bs";
import { BsFillShareFill } from "react-icons/bs";
function Features() {
  return (
    <div>
      <h1 className="text-center">FEATURES</h1>
      <div className="container p-3" style={{ marginTop: "1rem" }}>
        <div className="row p-5 ">
          <div className="col-sm-4 mt-2">
            <div style={{ display: "flex", flexDirection: "row" ,'justifyContent':'center'}}>
              <BsMusicNoteList size={40} />
              <h2>Manage Songs</h2>
            </div>
          </div>
          <div className="col-sm-4 mt-2">
            <div style={{ display: "flex", flexDirection: "row" ,'justifyContent':'center' }}>
              <BsMusicPlayerFill size={40} />
              <h2>Create Playlist</h2>
            </div>
          </div>
          <div className="col-sm-4 mt-2">
            <div style={{ display: "flex", flexDirection: "row" ,'justifyContent':'center'}}>
              <BsFillShareFill size={40} />
              <h2>Share</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
