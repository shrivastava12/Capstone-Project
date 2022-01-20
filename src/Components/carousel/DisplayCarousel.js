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
      className="display container"
     
    >
      <Carousel show={3}>
        {playlists.map((item) => (
          <div key={item.id} >
            <div >
            <img
                src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_860462652_396419.jpg"
                style={{ width: "100%", height: "200px" }}
              />
             
          
            </div>
           
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default DisplayCarousel;
