import Axios from "axios";
import { SONG_LOAD_SUCCESS } from "./Type";

export const loadSong = () => (dispatch) => {
  console.log("loadSong");
  try {
    Axios.get("http://localhost:5000/songs").then((res) => {
      console.log(res.data);
      console.log(res.status);
      dispatch({
        type: SONG_LOAD_SUCCESS,
        payload: res.data,
      });
    });
  } catch (e) {
    console.log(e);
  }
};

export const addSong =  (album,title,length,singer,img,genre) => dispatch => {
        console.log('add song',album,title,length,singer)
        const date = new Date();
        const id = date.getFullYear() + date.getMilliseconds();
       
            Axios.post('http://localhost:5000/songs',{
                id:id,
                Album:album,
                Title:title,
                Songlength:length,
                Singer:singer,
                Img:img,
                Genre:genre
            }).then((res) => {
                console.log(res.data);
             
            }).catch((err) => {
                console.log(err)
            })
       
}
