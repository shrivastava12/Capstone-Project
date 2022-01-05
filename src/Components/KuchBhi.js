import React from 'react'
import img from '../Images/img1.png';
function KuchBhi() {
    return (
        
        <div className='container p-2 mt-5 mb-5' >
            <div className='row'>
                <div className='col-lg-6 p-2' style={{'height':'450px'}}>
                    <div className='text-center'>
                    <img
              src={img}
              alt="info_img"
              classNameName=""
             height={400}
            />
                    </div>
              
                </div>
                <div className='col-lg-6' style={{'height':'450px'}}>
                <p className=" text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
             
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
                </div>
            </div>
        </div>
    )
}

export default KuchBhi
