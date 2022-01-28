import { useEffect, useState } from "react";
import { AiOutlinePlayCircle } from "react-icons/ai";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import { addSong, loadSong } from "../actions/songAction";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";


const Song = ({ loadSong, addSong, songs, isAuthenticated }) => {
  useEffect(() => {
    loadSong();
  }, []);

  const [album, setAlbum] = useState("");
  const [title, setTitle] = useState("");
  const [songLength, setSongLength] = useState("");
  const [singer, setSinger] = useState("");
  const [img, setImg] = useState("");
  const [genre, setGenre] = useState("");
  const [searchText, setSearchText] = useState("");
  const [isSearch, setIsSearch] = useState(true);
  const [searchData,setSearchData] = useState([]);


  const [show, setShow] = useState(false);

  const history = useHistory();

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchText,'search')
     let abc =  songs.filter(item => item.Title.replace(/ /g,'').toUpperCase() === searchText.replace(/ /g,'').toUpperCase() || item.Singer.replace(/ /g,'').toUpperCase() === searchText.replace(/ /g,'').toUpperCase() || item.Album.replace(/ /g,'').toUpperCase() === searchText.replace(/ /g,'').toUpperCase());
      
     if(abc.length === 0){
      toast("No search result found",{
        type:'error'
      })
     }else{
      setSearchData(abc);
      setIsSearch(false)
     }
    
    };

  
  const handleClose = () => setShow(false);
  const handleShow = () => {
    if (isAuthenticated) {
      setShow(true);
    } else {
      history.push("/login");
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("song");
    addSong(album, title, songLength, singer, img, genre);
    loadSong();
    handleClose();
    setIsSearch(true);
    toast("Added song Successfully", {
      type: "success",
    });
    setAlbum('');
    setTitle('');
    setSongLength('');
    setSinger('');
    setImg('');
    setGenre('');
  };

  return (
    <div style={{ backgroundColor: "#fff" }}>
      <ToastContainer />
      <div className="container ">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div className="mt-3">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                required
                placeholder="Search eg. song,singer,album"
                style={{
                  width: "250px",
                  borderRadius: "5px",
                  height: "35px",
                  padding: "10px",
                  border: "2px solid black",
                }}
                value={searchText}
                onChange={(e) =>  setSearchText(e.target.value)  }
              />
              <span> </span>
              <button type="submit" className="btn btn-dark ">
                search
              </button>
            </form>
          </div>
          <div className="mt-3">
            <button onClick={handleShow} className="btn btn-dark ">
              Add song
            </button>
          </div>
        </div>
        <div className="row">
          {isSearch ? (
            <>
              {songs.map((item) => (
                <div key={item.id} className="col-lg-4 mt-4 mb-2">
                  <div
                    className="card p-2 "
                    style={{
                      width: "18rem",
                      backgroundColor: "#31373D",
                      color: "#fff",
                      borderRadius: "12px",
                      boxShadow: "-5px 6px 5px 0px rgba(59,39,39,0.75)",
                    }}
                  >
                    <img
                      className="card-img-top p-1"
                      style={{ borderRadius: "12px" }}
                      height={200}
                      src={item.Img}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h4
                        className="text-center"
                        style={{ fontSize: "16.5px" }}
                      >
                        {item.Title}
                      </h4>
                      <p
                        className="card-text text-center m-1"
                        style={{ fontSize: "13px", color: "#D3D3D3" }}
                      >
                        {item.Singer}
                      </p>
                      <hr
                        style={{ backgroundColor: "#fff", marginTop: "-1.3px" }}
                      ></hr>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <AiOutlinePlayCircle size={40} />
                        <Link to={`/song-detail/${item.id}`}>
                          <button className="btn btn-sm btn-info ">
                            View more
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <>
            {searchData.map((item) => (
                <div key={item.id} className="col-lg-4 mt-4 mb-2">
                  <div
                    className="card p-2 "
                    style={{
                      width: "18rem",
                      backgroundColor: "#31373D",
                      color: "#fff",
                      borderRadius: "12px",
                      boxShadow: "-5px 6px 5px 0px rgba(59,39,39,0.75)",
                    }}
                  >
                    <img
                      className="card-img-top p-1"
                      style={{ borderRadius: "12px" }}
                      height={200}
                      src={item.Img}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h4
                        className="text-center"
                        style={{ fontSize: "16.5px" }}
                      >
                        {item.Title}
                      </h4>
                      <p
                        className="card-text text-center m-1"
                        style={{ fontSize: "13px", color: "#D3D3D3" }}
                      >
                        {item.Singer}
                      </p>
                      <hr
                        style={{ backgroundColor: "#fff", marginTop: "-1.3px" }}
                      ></hr>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <AiOutlinePlayCircle size={40} />
                        <Link to={`/song-detail/${item.id}`}>
                          <button className="btn btn-sm btn-info ">
                            View more
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
      {/* Modal here  */}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Song</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <form onSubmit={onSubmit}>
              <div class="form-row">
                <div class="col">
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    class="form-control"
                    placeholder=" Song title"
                  />
                </div>
                <div class="col">
                  <input
                    type="text"
                    required
                    value={album}
                    onChange={(e) => setAlbum(e.target.value)}
                    class="form-control"
                    placeholder="Album"
                  />
                </div>
              </div>
              <div class="form-row mt-2">
                <div class="col">
                  <input
                    value={singer}
                    required
                    onChange={(e) => setSinger(e.target.value)}
                    type="text"
                    class="form-control"
                    placeholder="Singer"
                  />
                </div>
                <div class="col">
                  <input
                    value={songLength}
                    required
                    onChange={(e) => setSongLength(e.target.value)}
                    type="text"
                    class="form-control"
                    placeholder="Song Length"
                  />
                </div>
              </div>
              <div class="form-row mt-2">
                <div class="col">
                  <input
                    value={genre}
                    required
                    onChange={(e) => setGenre(e.target.value)}
                    type="text"
                    class="form-control"
                    placeholder="Genre"
                  />
                </div>
                <div class="col">
                  <input
                    value={img}
                    required
                    onChange={(e) => setImg(e.target.value)}
                    type="text"
                    class="form-control"
                    placeholder="Image url"
                  />
                </div>
              </div>
              <Modal.Footer>
                <button type="submit" className="btn  btn-success btn-sm">
                  Submit
                </button>
              </Modal.Footer>
              <button className="btn btn-primary btn-sm" onClick={handleClose}>
                Close
              </button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => ({
  songs: state.songReduce.songs,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { loadSong, addSong })(Song);
