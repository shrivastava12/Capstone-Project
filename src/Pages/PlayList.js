import React, { useState,useEffect } from "react";
import { connect } from "react-redux";
import { loadPlayList } from "../actions/playlistAction";
import DisplayCarousel from "../Components/carousel/DisplayCarousel";
import Modal from 'react-bootstrap/Modal';
import  Axios  from "axios";
import { useHistory } from "react-router-dom";
import CarouselOne from "../Components/carousel/CarouselOne";
import Charts from "../Components/Charts";

function PlayList({loadPlayList,playlists,isAuthenticated,user}) {

  useEffect(() => {
    loadPlayList();
  },[])

  const history = useHistory();
  
  const [isPlayList,setIsPlayList] = useState(true);
  const [name,setName] = useState('');
  const [show,setShow] = useState(false);
  const handleClose =  () => setShow(false);

  const handleShow =  () => {
      if(isAuthenticated){
        setShow(true);
      }else{
        history.push("/login")
      }
     
  }

  const onSubmit = e => {
    const date =  new Date();
    const id =  date.getFullYear() + date.getMilliseconds();
      e.preventDefault();
      Axios.post('http://localhost:7000/playlist',{
        id:id,
        count:0,
        playlistname:name,
        playlistItem:[],
        user:user.first_name + user.last_name,
        
      }).then((res) => {
        console.log(res.data)
        loadPlayList();
        handleClose();
        alert('PlayList added Successfully')
        
      }).catch((err) => {
        console.log(err)
      })
  }
 
  return (
  <>
 
    <div className="p-5" style={{ backgroundColor: "#fff" }}>
      
  
  <div style={{'display':'flex','justifyContent':'space-between'}}> <h2 className="" style={{'color':'black'}}></h2>
    <button className="btn btn-dark " onClick={handleShow} >Create PlayList</button>
    </div>
 
    {
      isPlayList ?  <CarouselOne  playlists={playlists} /> : <h2 style={{'textAlign':'center','color':'yellow'}}>Create Your PlayList!</h2>
    }
     
{/*     
     <h2 className="p-3" style={{'color':'black'}}>Top Most</h2> */}

     <Charts playlists={playlists} />
    </div>
    <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title >
                      
                       Create PlayList
                        </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{ 'display': 'flex', 'flexDirection': 'row' }} >
                        <form>
                           
                           
                            <input required className="form-control" value={name} onChange={e => setName(e.target.value)}  type="text" placeholder="Playlist name" style={{width:'140%'}} />
                            <p className="mt-1">user: {user.first_name + "  " +user.last_name}</p>
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className='btn btn-primary btn-sm' onClick={handleClose}>
                        Close
                    </button>
                    <button onClick={onSubmit} className='btn  btn-success btn-sm'>Submit</button>

                </Modal.Footer>
            </Modal>
    </>
  );
}

const mapStateToProps =  state => ({
  playlists:state.playlistReduce.playlist,
  isAuthenticated:state.auth.isAuthenticated,
  user:state.auth.user
})

export default connect(mapStateToProps,{loadPlayList})(PlayList);
