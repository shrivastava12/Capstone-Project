import { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { connect } from "react-redux";
import { loadSong } from "../actions/songAction";


const PlaylistDetail = ({ songs, loadSong }) => {
  const { id } = useParams();

  useEffect(() => {
    loadPlayListDetail();
    loadSong();
  }, [id]);

  console.log("songs", songs);
  const [data, setData] = useState({});
  const [newArray, setNewArray] = useState([]);
  const [song,setSong] = useState({});
  const [name,setName] = useState('')
 
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

  const findSong =  () => {
    console.log(name,'name')
   let abc =  songs.find(ele => ele.Title.toUpperCase() === name.toUpperCase())
    setSong(abc);
    console.log('abc',abc)
  }
//   console.log('songggggg',song)
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
          <div className="col-lg-8 mt-4 ">
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
                  onChange={e => setName(e.target.value)}
                  style={{
                    width: "45%",
                    padding: "5px",
                    border: "2px solid springgreen",
                    borderRadius: "16px",
                  }}
                  placeholder=" search song title"
                />
                <span></span>
                <button onClick={findSong} className="btn btn-success ml-2 ">Search</button>
                <br></br>
             {
                 song.Title && <ul class="list-group list-group-horizontal mt-2">
                 <li style={{'width':'90%'}} class="list-group-item">{song.Title}</li>
                 <li style={{'width':'100%'}} class="list-group-item">{song.Singer}</li>
                 <li style={{'width':'100%'}} class="list-group-item text-center"><button className="btn btn-success btn-sm">Add to playList</button></li>
                 </ul>
             }
               
              </div>
            </div>
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
                  <ListGroup.Item style={{ width: "100%" }}>X</ListGroup.Item>
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
});

export default connect(mapStateToProps, { loadSong })(PlaylistDetail);
