import React from "react";
import { useHistory } from "react-router-dom";
import Carousel from "./Carousel";

import Axios from 'axios';

function DisplayCarousel({playlists}) {

  const history = useHistory();

    const frequentlyVisited =  (id,count) => {
      Axios.patch(`http://localhost:7000/playlist/${id}`,{
        count:count+1
      }).then((res) => {
        console.log(res.data)
        history.push(`/playlist-detail/${id}`)
      }).catch((err) => {
        console.log(err)
      })
    }
  

  console.log('playlist',playlists)
  return (
    <div
      className="display"
      style={{ maxWidth: 1200, marginLeft: "auto", marginRight: "auto" }}
    >
      <Carousel show={3}>
        {
          playlists.map((item => (
            <div key={item.id}>
            <div  style={{ padding: 8 }}>
              <img  
                src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_860462652_396419.jpg"
                style={{ width: "100%",height:'200px' }}
              />
              <div
                className="p-2"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  backgroundColor:'#214c8f'
                }}
              >
                <h2
                  className="text-center"
                  style={{ color: "#fff", fontSize: "24px" }}
                >
                  {item.playlistname}
                </h2>
                <p className="text-muted" style={{ color: "#fff" }}>
                  {item.user}
                </p>
                <button onClick={() => frequentlyVisited(item.id,item.count) } style={{'color':'#fff'}} className="btn btn-outline-info btn-sm">View more</button>
              </div>
            </div>
            </div>
          )))
        
        }
       
       
        
      </Carousel>
    </div>
  );
}

export default DisplayCarousel;
