import { useState } from 'react';
import { AiOutlinePlayCircle } from 'react-icons/ai'
import Modal from 'react-bootstrap/Modal';


const PlayList = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div style={{ 'backgroundColor': 'rgb(65, 54, 67)', 'height': '100vh' }}>
            <div className="container ">
                <div style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'space-between' }}>
                    <div>

                    </div>
                    <div className="mt-3">
                        <button onClick={handleShow} className='btn btn-info '>
                            Add song
                        </button>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-lg-4 mt-4 mb-2">
                        <div className="card p-2 " style={{ width: '18rem', 'backgroundColor': '#31373D', 'color': '#fff', 'borderRadius': '12px', 'boxShadow': '-5px 6px 5px 0px rgba(59,39,39,0.75)' }}>
                            <img className="card-img-top p-1" style={{ 'borderRadius': '12px' }} height={200} src="https://picsum.photos/200/200" alt="Card image cap" />
                            <div className="card-body">
                                <h4 className="text-center" style={{ 'fontSize': '16.5px' }}>Bekhyali</h4>
                                <p className="card-text m-1" style={{ 'fontSize': '13px', 'color': '#D3D3D3' }}>Bekhyali me bhi tera hi khyal aaye..!</p>
                                <hr style={{ 'backgroundColor': '#fff', 'marginTop': '-1.3px' }}></hr>
                                <div style={{ 'display': 'flex', 'justifyContent': 'space-between' }}>
                                    <AiOutlinePlayCircle size={40} />
                                    <button className='btn btn-sm btn-info '>View more</button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mt-4 mb-2">
                        <div className="card p-2 " style={{ width: '18rem', 'backgroundColor': '#31373D', 'color': '#fff', 'borderRadius': '12px', 'boxShadow': '-5px 6px 5px 0px rgba(59,39,39,0.75)' }}>
                            <img className="card-img-top p-1" style={{ 'borderRadius': '12px' }} height={200} src="https://picsum.photos/200/200" alt="Card image cap" />
                            <div className="card-body">
                                <h4 className="text-center" style={{ 'fontSize': '16.5px' }}>Bekhyali</h4>
                                <p className="card-text m-1" style={{ 'fontSize': '13px', 'color': '#D3D3D3' }}>Bekhyali me bhi tera hi khyal aaye..!</p>
                                <hr style={{ 'backgroundColor': '#fff', 'marginTop': '-1.3px' }}></hr>
                                <div style={{ 'display': 'flex', 'justifyContent': 'space-between' }}>
                                    <AiOutlinePlayCircle size={40} />
                                    <button className='btn btn-sm btn-info '>View more</button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mt-4 mb-2">
                        <div className="card p-2 " style={{ width: '18rem', 'backgroundColor': '#31373D', 'color': '#fff', 'borderRadius': '12px', 'boxShadow': '-5px 6px 5px 0px rgba(59,39,39,0.75)' }}>
                            <img className="card-img-top p-1" style={{ 'borderRadius': '12px' }} height={200} src="https://picsum.photos/200/200" alt="Card image cap" />
                            <div className="card-body">
                                <h4 className="text-center" style={{ 'fontSize': '16.5px' }}>Bekhyali</h4>
                                <p className="card-text m-1" style={{ 'fontSize': '13px', 'color': '#D3D3D3' }}>Bekhyali me bhi tera hi khyal aaye..!</p>
                                <hr style={{ 'backgroundColor': '#fff', 'marginTop': '-1.3px' }}></hr>
                                <div style={{ 'display': 'flex', 'justifyContent': 'space-between' }}>
                                    <AiOutlinePlayCircle size={40} />
                                    <button className='btn btn-sm btn-info '>View more</button>
                                </div>

                            </div>
                        </div>
                    </div>
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
                    <Modal.Title >
                      
                       Add Song
                        </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{ 'display': 'flex', 'flexDirection': 'row' }} >
                        <form>
                            <div class="form-row">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder=" Song title" />
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="Album" />
                                </div>
                            </div>
                            <div class="form-row mt-2">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="Singer" />
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="Song Length" />
                                </div>
                            </div>
                            <div class="form-row mt-2">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="Genre" />
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="Image url" />
                                </div>
                            </div>
                         
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className='btn btn-primary btn-sm' onClick={handleClose}>
                        Close
                    </button>
                    <button className='btn btn-success btn-sm'>Submit</button>

                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default PlayList;