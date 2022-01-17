import React, { useState } from "react";
import DisplayCarousel from "../Components/carousel/DisplayCarousel";



function PlayList() {

  const [isPlayList,setIsPlayList] = useState(true);

  

  return (
  
    <div className="p-2" style={{ backgroundColor: "#fff" }}>
      
  
  <div style={{'display':'flex','justifyContent':'space-between'}}> <h2 className="" style={{'color':'black'}}>Your PlayList</h2>
    <button className="btn btn-info btn-sm" >Create PlayList</button>
    </div>
    {
      isPlayList ? <DisplayCarousel/> : <h2 style={{'textAlign':'center','color':'yellow'}}>Create Your PlayList!</h2>
    }
     
    
     <h2 className="p-3" style={{'color':'black'}}>Top Most</h2>
     <DisplayCarousel/>
    </div>
  );
}

export default PlayList;
