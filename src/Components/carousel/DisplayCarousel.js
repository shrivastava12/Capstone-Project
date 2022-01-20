import React from "react";
import { useHistory } from "react-router-dom";
import Carousel from "./Carousel";

import Axios from "axios";

function DisplayCarousel({ playlists }) {
  const history = useHistory();

  const frequentlyVisited = (id, count) => {
    Axios.patch(`http://localhost:7000/playlist/${id}`, {
      count: count + 1,
    })
      .then((res) => {
        console.log(res.data);
        history.push(`/playlist-detail/${id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log("playlist", playlists);
  return (
    <div
      className="display container-lg-12"
     
    >
      <Carousel show={3}>
        {playlists.map((item) => (
          <div key={item.id} >
            <div class="card" style={{width:'25rem'}}>
            <img
                src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_860462652_396419.jpg"
                style={{ width: "100%", height: "200px" }}
              />
              <div class="card-body" style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent:'space-between',
                  backgroundColor: "#214c8f",
                }}>
                <div className=" card-body col-lg-12" style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent:'space-between',
                  backgroundColor: "#214c8f",
                }}>

                <h2
                  className="text-center"
                  style={{ color: "#fff", fontSize: "20px" }}
                >
                  {item.playlistname}
                </h2>
                <p className="text-muted" style={{ color: "#fff" }}>
                  {item.user}
                </p>
                <button
                  onClick={() => frequentlyVisited(item.id, item.count)}
                  style={{ color: "#fff" }}
                  className="btn btn-info btn-sm"
                >
                  View more
                </button>
               
               
                </div>
                
              
              </div>
            </div>
           
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default DisplayCarousel;
