import { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { connect } from "react-redux";
import { loadSong } from "../actions/songAction";
import { RiPlayListAddFill } from "react-icons/ri";
import "./Playlistdetail.css";
import { useHistory } from "react-router-dom";

const PlaylistDetail = ({ songs, loadSong,isAuthenticated }) => {
  const { id } = useParams();

  useEffect(() => {
    loadPlayListDetail();
    loadSong();
  }, [id]);

  const history = useHistory();
  
  const [data, setData] = useState({});
  const [newArray, setNewArray] = useState([]);
  const [song, setSong] = useState({});
  const [name, setName] = useState("");
  const [isTitle, setIsTitle] = useState(false);
  const [message, setMessage] = useState("");

// It is for recommendation add button
  const addSongToPlayList =  (idSong,title,singer,album) => {

    if(isAuthenticated){
    const abcd = [
      ...newArray,
      { id: idSong, songname:title, singer: singer,album:album },
    ];
    
    Axios.put(`http://localhost:7000/playlist/${id}`, {
      id: id,
      playlistname: data.playlistname,
      playlistItem: abcd,
    })
      .then((res) => {
        if (res.status === 200) {
          loadPlayListDetail();
          alert("Added Successfully!");
          
        }
      })
      .catch((err) => {
        console.log(err);
      });
    }else{
      history.push("/login")
    }
  }
  const updatePlayList = () => {

    if(isAuthenticated){

    
    const abcd = [
      ...newArray,
      { id: song.id, songname: song.Title, singer: song.Singer, album:song.Album },
    ];
    Axios.put(`http://localhost:7000/playlist/${id}`, {
      id: id,
      playlistname: data.playlistname,
      playlistItem: abcd,
    })
      .then((res) => {
        if (res.status === 200) {
          loadPlayListDetail();
          alert("Added Successfully!");
          setSong({});
        }
      })
      .catch((err) => {
        console.log(err);
      });
    }else{
      history.push("/login");
    }
  };

  const deletePlayListItem = (songId) => {
    if(isAuthenticated){

  
    const abcd = newArray.filter((item) => item.id != songId);
    Axios.put(`http://localhost:7000/playlist/${id}`, {
      id: id,
      playlistname: data.playlistname,
      playlistItem: abcd,
    })
      .then((res) => {
        if (res.status === 200) {
          loadPlayListDetail();
          alert("Deleted Successfully");
          //  setSong({});
        }
      })
      .catch((err) => {
        console.log(err);
      });
    }else{
      history.push("/login");
    }
  };

  const loadPlayListDetail = () => {
    Axios.get(`http://localhost:7000/playlist/${id}`)
      .then((res) => {
        console.log("response", res.data);
        setData(res.data);
        setNewArray(res.data.playlistItem);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const findSong = () => {
    console.log(name, "name");
    setIsTitle(false);
    let abc = songs.find(
      (ele) => ele.Title.toUpperCase() === name.toUpperCase()
    );

    setSong(abc);
    if (abc != undefined) {
      setIsTitle(true);
    } else {
      setMessage("Not find any match!");
    }
    console.log("abc", abc);
  };
 

  return (
    <div style={{ backgroundColor: "#31373D", width: "100%" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mt-4">
            <div className="p-3">
              <img
                className="img-thumbnail"
                src="https://thumbor.forbes.com/thumbor/711x474/http://specials-images.forbesimg.com/imageserve/750037840/960x0.jpg?fit=scale"
              />
            </div>
          </div>
          <div className="col-lg-4 mt-4 ">
            <div className="p-3">
              <h2
                style={{ color: "white", fontSize: "60px", fontWeight: "bold" }}
              >
                {data.playlistname}
              </h2>
              <p className="mt-3" style={{ color: "white" }}>
                Ayushee shrivastava :
                <span style={{ color: "skyblue" }}>
                  {" "}
                  {newArray.length} songs
                </span>
              </p>

              <div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: "65%",
                    padding: "5px",
                    border: "2px solid springgreen",
                    borderRadius: "16px",
                  }}
                  placeholder=" search song title"
                />
                <span></span>
                <button onClick={findSong} className="btn btn-success ml-2 ">
                  Search
                </button>
                <br></br>
                {isTitle ? (
                  song.Title && (
                    <ul class="list-group list-group-horizontal mt-2">
                      <RiPlayListAddFill color="white" />{" "}
                      <li style={{ width: "90%" }} class="list-group-item">
                        {song.Title}
                      </li>
                      <li style={{ width: "100%" }} class="list-group-item">
                        {song.Singer}
                      </li>
                      <li
                        style={{ width: "100%" }}
                        class="list-group-item text-center"
                      >
                        <button
                          onClick={updatePlayList}
                          className="btn btn-success btn-sm"
                        >
                          Add to playList
                        </button>
                      </li>
                    </ul>
                  )
                ) : (
                  <p style={{ color: "#fff" }}>{message}</p>
                )}
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-4">
            <h3 style={{ color: "gray" }} className="text-center">
              Recommended
            </h3>
            {songs.slice(0, 4).map((item) => {
              return (
                <div class="list-group">
              <a href="#" style={{'display':'flex','justifyContent':'space-between','alignItems':'center','height':'45px'}} class="list-group-item list-group-item-action ">
                <p>{item.Title}</p><button onClick={() =>  addSongToPlayList(item.id,item.Title,item.Singer,item.Album) } className="btn btn-success btn-sm">Add</button>
              </a>
             
            </div>
              );
            })}

           
          </div>
        </div>
        <hr color="#fff" />
        <div>
          <div className="row">
            <div style={{ width: "100%" }}>
              <ListGroup
                className="mb-2"
                style={{ width: "100%" }}
                horizontal="lg"
              >
                <ListGroup.Item
                  style={{ width: "100%", backgroundColor: "springgreen" }}
                >
                  Title
                </ListGroup.Item>
                <ListGroup.Item
                  style={{ width: "100%", backgroundColor: "springgreen" }}
                >
                  Singer
                </ListGroup.Item>
                <ListGroup.Item
                  style={{ width: "100%", backgroundColor: "springgreen" }}
                >
                  Album
                </ListGroup.Item>
                <ListGroup.Item
                  style={{ width: "100%", backgroundColor: "springgreen" }}
                ></ListGroup.Item>
              </ListGroup>
              {newArray.map((item) => (
                <ListGroup style={{ width: "100%" }} horizontal="lg">
                  <ListGroup.Item style={{ width: "100%" }}>
                    {item.songname}
                  </ListGroup.Item>
                  <ListGroup.Item style={{ width: "100%" }}>
                    {item.singer}
                  </ListGroup.Item>
                  <ListGroup.Item style={{ width: "100%" }}>
                    {item.album}
                  </ListGroup.Item>
                  <ListGroup.Item style={{ width: "100%" }}>
                    <button
                      onClick={() => deletePlayListItem(item.id)}
                      className="btn btn-danger btn-sm"
                    >
                      Remove
                    </button>
                  </ListGroup.Item>
                </ListGroup>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  songs: state.songReduce.songs,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { loadSong })(PlaylistDetail);
