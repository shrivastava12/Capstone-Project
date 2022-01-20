import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import "../../App.css";

function CarouselOne({ playlists }) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

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

  return (
    <div className="container">
      <Carousel responsive={responsive}>
      {
          playlists.map((item) => (
<div key={item.id} className="imgOne m-3">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <h1 style={{ color: "#fff", marginTop: "120px" }}>{item.playlistname}</h1>
          </div>
          <div
            className="p-3 mt-4"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <p style={{ color: "#fff", fontSize: "18px" }}>
              {item.user}
            </p>
            <button onClick={() => frequentlyVisited(item.id,item.count)} className="btn btn-outline-light btn-sm">view more</button>
          </div>
        </div>
          ))
      }  
       
        
      </Carousel>
    </div>
  );
}
export default CarouselOne;
