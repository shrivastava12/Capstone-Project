import React from "react";
import { BsMusicNoteList } from "react-icons/bs";
import { BsMusicPlayerFill } from "react-icons/bs";
import { BsFillShareFill } from "react-icons/bs";
function Features() {
  return (
    <div>
      <h1 className="text-center">Features</h1>
      <div className="container" style={{ marginTop: "1rem" }}>
        <div className="row">
          <div className="col-sm-4">
            <div style={{ display: "flex", flexDirection: "row" }}>
              <BsMusicNoteList size={40} />
              <h2>Manage Songs</h2>
            </div>
          </div>
          <div className="col-sm-4">
            <div style={{ display: "flex", flexDirection: "row" }}>
              <BsMusicPlayerFill size={40} />
              <h2>Create Playlist</h2>
            </div>
          </div>
          <div className="col-sm-4">
            <div style={{ display: "flex", flexDirection: "row" }}>
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
