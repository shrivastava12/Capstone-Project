import React, { useState, useEffect } from "react";
import Axios from "axios";

function Test() {
  const [data, setData] = useState([]);
  const [songobj,setSongObj] = useState({});

  useEffect(() => {
    load();
  }, []);

  const testing = () => {
    const song = [...songobj,{id:4,songname:"kuchbhi"}]


    Axios.put("http://localhost:7000/playlist/2", {
      playlistname: "newOne",
      playlistItem: [
       song
      ],
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

 

  const load = () => {
    Axios.get("http://localhost:7000/playlist/2")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setSongObj(data.playlistItem)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <button onClick={testing} className="btn btn-primary">
        Click me
      </button>
    </div>
  );
}

export default Test;
