import React from "react";
import {Link } from "react-router-dom";
import { BsMusicNoteList } from "react-icons/bs";
import { BsMusicPlayerFill } from "react-icons/bs";
import { BsFillShareFill } from "react-icons/bs";
function Features() {
  return (
    <div className="mt-5">
      <h1 className="text-center mt-2" style={{'fontWeight':'bold'}}>Features</h1>
      <div className="container p-3" style={{ marginTop: "1rem" }}>
        <div className="row p-5 ">
          <div className="col-sm-4 mt-2">
            <div style={{ display: "flex", flexDirection: "row" ,'justifyContent':'center','border':'1px black'}}>
              <BsMusicNoteList size={40} />
              <Link to='/song'>
                <h2>Manage Songs</h2>
              </Link>
              
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
