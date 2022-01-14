import React from "react";
import PlayListDisplay from "../Components/PlaylistDetail";
import './playlist.css'

function PlayList() {
  return (
    <div style={{ backgroundColor: "rgb(65, 54, 67)" }}>
      <div className="container">
        <div className="row">
          <div class="card" style={{ width: "18rem" }}>
            <img
              height={250}
              class="card-img-top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZKX418gIK8XPDI_wqGJBtoaL-FWmvzOlPzQ&usqp=CAU"
              alt="Card image cap"
            />
            <div class="card-body bg-dark">
              <p class="card-text" style={{ color: "#fff" }}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>

         
        </div>


<div style={{'width':'100%'}}>
        <div id="demo"  class="carousel slide" data-ride="carousel">

<ul class="carousel-indicators">
  <li data-target="#demo" data-slide-to="0" class="active"></li>
  <li data-target="#demo" data-slide-to="1"></li>
  <li data-target="#demo" data-slide-to="2"></li>
</ul>

<div class="container carousel-inner no-padding">
  <div class="carousel-item active">
    <div class="col-xs-3 col-sm-3 col-md-3">
    <div class="card">
            <img
              height={200}
              class="card-img-top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZKX418gIK8XPDI_wqGJBtoaL-FWmvzOlPzQ&usqp=CAU"
              alt="Card image cap"
            />
            <div class="card-body bg-dark">
              <p class="card-text" style={{ color: "#fff" }}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
    </div>    
    <div class="col-xs-3 col-sm-3 col-md-3">
      <img src="https://image.shutterstock.com/z/stock-photo-sleeping-disorders-as-a-reason-for-insomnia-293777093.jpg"/>
    </div>   
    <div class="col-xs-3 col-sm-3 col-md-3">
      <img src="https://image.shutterstock.com/z/stock-photo-sleeping-disorders-as-a-reason-for-insomnia-293777093.jpg"/>
    </div>   
    <div class="col-xs-3 col-sm-3 col-md-3">
      <img src="https://image.shutterstock.com/z/stock-photo-sleeping-disorders-as-a-reason-for-insomnia-293777093.jpg"/>
    </div>   
  </div>
  <div class="carousel-item">
    <div class="col-xs-3 col-sm-3 col-md-3">
      <img src="https://image.shutterstock.com/z/stock-photo-sleeping-disorders-as-a-reason-for-insomnia-293777093.jpg"/>
    </div>    
    <div class="col-xs-3 col-sm-3 col-md-3">
      <img src="https://image.shutterstock.com/z/stock-photo-sleeping-disorders-as-a-reason-for-insomnia-293777093.jpg"/>
    </div>   
    <div class="col-xs-3 col-sm-3 col-md-3">
      <img src="https://image.shutterstock.com/z/stock-photo-sleeping-disorders-as-a-reason-for-insomnia-293777093.jpg"/>
    </div>   
    <div class="col-xs-3 col-sm-3 col-md-3">
      <img src="https://image.shutterstock.com/z/stock-photo-sleeping-disorders-as-a-reason-for-insomnia-293777093.jpg"/>
    </div>  
  </div>
  <div class="carousel-item">
    <div class="col-xs-3 col-sm-3 col-md-3">
      <img src="https://image.shutterstock.com/z/stock-photo-sleeping-disorders-as-a-reason-for-insomnia-293777093.jpg"/>
    </div>    
    <div class="col-xs-3 col-sm-3 col-md-3">
      <img src="https://image.shutterstock.com/z/stock-photo-sleeping-disorders-as-a-reason-for-insomnia-293777093.jpg"/>
    </div>   
    <div class="col-xs-3 col-sm-3 col-md-3">
      <img src="https://image.shutterstock.com/z/stock-photo-sleeping-disorders-as-a-reason-for-insomnia-293777093.jpg"/>
    </div>   
    <div class="col-xs-3 col-sm-3 col-md-3">
      <img src="https://image.shutterstock.com/z/stock-photo-sleeping-disorders-as-a-reason-for-insomnia-293777093.jpg"/>
    </div>  
  </div>
</div>

<a class="carousel-control-prev" href="#demo" data-slide="prev">
  <span class="carousel-control-prev-icon"></span>
</a>
<a class="carousel-control-next" href="#demo" data-slide="next">
  <span class="carousel-control-next-icon"></span>
</a>
</div>
</div>
      </div>
      {/* <PlayListDisplay/> */}
    </div>
  );
}

export default PlayList;
