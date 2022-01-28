import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../App.css";
import UseUnsavedChangesWarning from "../Components/UseUnsavedChangesWarning";

function Test() {
  const [data, setData] = useState([]);
  const [songobj, setSongObj] = useState({});
  const [songs, setSongs] = useState("");
  const [name, setName] = useState("");

  const [isClick, setIsClick] = useState(false);
  const [Prompt, setDirty, setPristine] = UseUnsavedChangesWarning();

  useEffect(() => {
    load();
  }, []);

  const testing = () => {
    const song = [...songobj, { id: 4, songname: "kuchbhi" }];

    Axios.put("http://localhost:7000/playlist/2", {
      playlistname: "newOne",
      playlistItem: [song],
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
        setSongObj(data.playlistItem);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const onMouseLeave = (e) => {
  //   if (isClick === false && name != "") {
  //     return alert("Are u");
  //   }
  // };

  return (
    <div>
      <button className="btn btn-primary">Click me</button>
      <div
        
        style={{ heigth: "400px", width: "400px" }}
      >
        <form className="mt-4">
          <input
            value={name}
            onChange={(e) =>{
              setName(e.target.value);
              setDirty();
            } }
            type="text"
            placeholder="Input box"
          />
          <button onClick={
            () => {
              setName("");
              setPristine();
            }
          } type="submit">Submit</button>
        </form>
      </div>
      {Prompt}
    </div>
  );
}

export default Test;
