import Axios from "axios";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../App.css";

const SongDetail = ({ isAuthenticated }) => {
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    fetchSongDetail();
  }, [id]);
  console.log(isAuthenticated, "is");

  const [album, setAlbum] = useState("");
  const [title, setTitle] = useState("");
  const [songLength, setSongLength] = useState("");
  const [singer, setSinger] = useState("");
  const [img, setImg] = useState("");
  const [genre, setGenre] = useState("");
  const [isEdit, setIsEdit] = useState(true);

  const fetchSongDetail = () => {
    Axios.get(`http://localhost:5000/songs/${id}`)
      .then((res) => {
        setAlbum(res.data.Album);
        setTitle(res.data.Title);
        setSongLength(res.data.Songlength);
        setSinger(res.data.Singer);
        setImg(res.data.Img);
        setGenre(res.data.Genre);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onEdit = () => {
    if (isAuthenticated) {
      setIsEdit(false);
      alert("Now You are in Editable Mode");
    } else {
      history.push("/login");
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    Axios.put(`http://localhost:5000/songs/${id}`, {
      Album: album,
      Title: title,
      Songlength: songLength,
      Singer: singer,
      Img: img,
      Genre: genre,
    })
      .then((res) => {
        if (res.status === 200) {
          fetchSongDetail();
          alert("You have updated Successfully");
          setIsEdit(true);
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Some error has occured");
      });
  };

  const onDelete = () => {
    console.log("delete");
    if (isAuthenticated) {
      Axios.delete(`http://localhost:5000/songs/${id}`)
        .then((res) => {
          alert("Deleted Successfully");
          history.push("/song");
        })
        .catch((err) => {
          alert("Some error happend!");
          console.log(err);
        });
    } else {
      history.push("/login");
    }
  };

  return (
    <div className="image-box " style={{ height: "100%" }}>
      <div
        class="image-box__background"
        style={{
          backgroundColor: "rgb(65, 54, 67)",
        }}
      ></div>
      <div className="image-box__overlay"></div>
      <div className="image-box__content">
        <div className="container ">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              className="mt-4 mb-2 p-2 text-center"
              style={{ backgroundColor: "green", borderRadius: "2px" }}
            >
              <p style={{ padding: "0px", margin: "0px" }} className="">
                Song Detail
              </p>
            </div>

            <div className="mt-4 mb-2">
              <button onClick={onEdit} className="btn btn-secondary btn-sm">
                Edit
              </button>
              <span> </span>
              <button onClick={onDelete} className="btn btn-warning btn-sm">
                Delete
              </button>
            </div>

            {/* <div className='mt-4 mb-2'>
                <button className='btn btn-secondary btn-sm'>Edit</button><span>  </span>
                <button className='btn btn-warning btn-sm'>Delete</button>
              </div> */}
          </div>
          <div className="row mt-4">
            <div className="col-lg-4 ">
              <img
                className="card-img-top img-thumbnail "
                style={{ borderRadius: "12px", zIndex: 1 }}
                height={250}
                src={img}
                alt="Card image cap"
              />
            </div>
            <div className="col-lg-8 ">
              <form>
                <input
                  type="text"
                  disabled={isEdit}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  style={{
                    border: "none",
                    backgroundColor: "transparent",
                    outline: "0px",
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: "40px",
                    width: "100%",
                  }}
                />
                <input
                  type="text"
                  placeholder="Singer"
                  disabled={isEdit}
                  value={singer}
                  onChange={(e) => setSinger(e.target.value)}
                  style={{
                    border: "none",
                    backgroundColor: "transparent",
                    outline: "0px",
                    color: "#fff",
                    fontWeight: "initial",
                    fontSize: "28px",
                    width: "100%",
                  }}
                />

                <div
                  className="row m-1 p-3"
                  style={{ border: "2px solid #F6F524", boxShadow: "" }}
                >
                  <div className="col-lg-6 p-3">
                    <span style={{color:'black'}}>Album</span>
                    <input
                      type="text"
                      placeholder="album"
                      disabled={isEdit}
                      value={album}
                      onChange={(e) => setAlbum(e.target.value)}
                      style={{
                        border: "none",
                        backgroundColor: "transparent",
                        outline: "0px",
                        color: "#fff",
                        fontSize: "20px",
                        width: "100%",
                      }}
                    />
                    <span style={{color:'black'}}>Singer</span>
                    <input
                      type="text"
                      disabled={isEdit}
                      placeholder="img"
                      value={img}
                      onChange={(e) => setImg(e.target.value)}
                      style={{
                        border: "none",
                        backgroundColor: "transparent",
                        outline: "0px",
                        color: "#fff",
                        width: "100%",
                      }}
                    />
                  </div>
                  <div className="col-lg-6  p-3">
                    <span style={{color:'black'}}>Song Length</span>
                    <input
                      type="text"
                      placeholder="song length"
                      disabled={isEdit}
                      value={songLength}
                      onChange={(e) => setSongLength(e.target.value)}
                      style={{
                        border: "none",
                        backgroundColor: "transparent",
                        outline: "0px",
                        color: "#fff",
                        fontSize: "20px",
                        width: "100%",
                      }}
                    />
                    <span style={{color:'black'}}>Genre</span>
                    <input
                      type="text"
                      placeholder="Genre"
                      disabled={isEdit}
                      value={genre}
                      onChange={(e) => setGenre(e.target.value)}
                      style={{
                        border: "none",
                        backgroundColor: "transparent",
                        outline: "0px",
                        color: "#fff",
                        fontSize: "20px",
                        width: "100%",
                      }}
                    />
                  </div>
                </div>
              </form>
              {!isEdit ? (
                <div className="mt-3 p-2 " style={{ float: "right" }}>
                  <button
                    onClick={onSubmit}
                    className="btn btn-success btn-small"
                  >
                    Submit
                  </button>
                </div>
              ) : (
                ""
              )}
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </div>
          </div>
        </div>
        {/* <div className='container'>
          <div>
             
          </div>
          <div className='row '>

            <div className="col-lg-4 " style={{ 'height': '300px' }}>
              <div className="">
                <img className="card-img-top " style={{ 'borderRadius': '12px', 'zIndex': 1 }} height={250} src="https://picsum.photos/200/200" alt="Card image cap" />
              </div>
            </div>
            <div className="col-lg-8 " style={{ 'height': '300px', 'borderRightColor': 'rgb(65, 54, 67)' }}>
              <div className=''>
               
              </div>
             
            </div>
          </div>

        </div> */}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {})(SongDetail);
