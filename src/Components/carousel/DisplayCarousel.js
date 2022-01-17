import React from 'react';
import Carousel from './Carousel';

function DisplayCarousel() {
    return (
        <div className='display' style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto' }}>
            <Carousel 
                show={4}
            >
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://images.pexels.com/photos/1540319/pexels-photo-1540319.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div >
                    <div style={{padding: 8}}>
                        <img src="https://images.pexels.com/photos/1540319/pexels-photo-1540319.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="placeholder" style={{width: '100%'}} />
                       <div  className='bg-dark  p-2' style={{'display':'flex','flexDirection':'row','justifyContent':'space-between'}}>
                       <h2 className='text-center' style={{ color: "#fff",fontSize:'24px' }}>
                       MyFirst PlayList
                      </h2>
                      <p className="text-muted" style={{ color: "#fff" }}>Alex</p>
                       </div>
                       
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img  src="https://images.pexels.com/photos/1540319/pexels-photo-1540319.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://images.pexels.com/photos/1540319/pexels-photo-1540319.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://images.pexels.com/photos/1540319/pexels-photo-1540319.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://images.pexels.com/photos/1540319/pexels-photo-1540319.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://images.pexels.com/photos/1540319/pexels-photo-1540319.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://images.pexels.com/photos/1540319/pexels-photo-1540319.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
            </Carousel>
        </div>
    )
}

export default DisplayCarousel
