import { useState } from 'react';
import '../App.css';

const SongDetail = () => {

  return (


    <div className="image-box" style={{ 'height': '100vh', }}>
      <div
        class="image-box__background"
        style={{
          'backgroundColor': 'rgb(65, 54, 67)'
        }}
      >
      </div>
      <div className="image-box__overlay"></div>
      <div className="image-box__content">
        <div className='container '>
          <div style={{ 'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'space-between' }}>

             
                <div className='mt-4 mb-2 p-2 text-center' style={{ 'backgroundColor': 'green','borderRadius':'2px' }}>
                  <p style={{'padding':'0px','margin':'0px'}} className=''>Song Detail</p>
                </div>
            
            
                <div className='mt-4 mb-2'>
                  <button className='btn btn-secondary btn-sm'>Edit</button><span>  </span>
                  <button className='btn btn-warning btn-sm'>Delete</button>
                </div>
              

              {/* <div className='mt-4 mb-2'>
                <button className='btn btn-secondary btn-sm'>Edit</button><span>  </span>
                <button className='btn btn-warning btn-sm'>Delete</button>
              </div> */}
            

          </div>
          <div className='row mt-4'>
            <div className='col-lg-4' >

              <img className="card-img-top img-thumbnail " style={{ 'borderRadius': '12px', 'zIndex': 1 }} height={250} src="https://picsum.photos/200/200" alt="Card image cap" />
            </div>
            <div className='col-lg-8 ' >

              <form>

                <input type="text" placeholder='dsfsf' value="Bekhyali" style={{ 'border': 'none', 'backgroundColor': 'transparent', 'outline': '0px', 'color': '#fff', 'fontWeight': 'bold', 'fontSize': '40px', 'width': '100%' }} />
                <input type="text" placeholder='dsfsf' value="Bekhyali me bhi tera" style={{ 'border': 'none', 'backgroundColor': 'transparent', 'outline': '0px', 'color': '#fff', 'fontWeight': 'initial', 'fontSize': '28px', 'width': '100%' }} />

                <div className='row m-1 p-3' style={{ 'border': '2px solid #F6F524', 'boxShadow': '' }} >
                  <div className='col-lg-6 p-3'>
                    <span>Album</span>
                    <input type="text" placeholder='dsfsf' value="bgc" style={{ 'border': 'none', 'backgroundColor': 'transparent', 'outline': '0px', 'color': '#fff', 'fontSize': '20px', 'width': '100%' }} />
                    <span>Singer</span>
                    <input type="text" placeholder='dsfsf' value="bgc" style={{ 'border': 'none', 'backgroundColor': 'transparent', 'outline': '0px', 'color': '#fff', 'width': '100%' }} />
                  </div>
                  <div className='col-lg-6  p-3'>
                    <span>Song Length</span>
                    <input type="text" placeholder='dsfsf' value="bgc" style={{ 'border': 'none', 'backgroundColor': 'transparent', 'outline': '0px', 'color': '#fff', 'fontSize': '20px', 'width': '100%' }} />
                    <span>Genre</span>
                    <input type="text" placeholder='dsfsf' value="bgc" style={{ 'border': 'none', 'backgroundColor': 'transparent', 'outline': '0px', 'color': '#fff', 'fontSize': '20px', 'width': '100%' }} />

                  </div>
                </div>




              </form>
              <div className='mt-3 p-2' style={{'float':'right'}}>
          <button className='btn btn-success btn-small'>Submit</button>
      </div>
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
  )

};

export default SongDetail;