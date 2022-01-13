import { ListGroup } from "react-bootstrap";


const PlaylistDetail = () => {
    return (
        <div style={{ 'backgroundColor': '#31373D', 'height': '600px', 'width': '100%' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mt-4">
                        <div className="p-3">
                            <img className="img-thumbnail" src="https://thumbor.forbes.com/thumbor/711x474/http://specials-images.forbesimg.com/imageserve/750037840/960x0.jpg?fit=scale" />
                        </div>
                    </div>
                    <div className="col-lg-8 mt-4 ">
                        <div className="p-3" >
                            <h2 style={{ 'color': 'white', 'fontSize': '60px', 'fontWeight': 'bold' }}>My PlayList</h2>
                            <p className="mt-3" style={{ 'color': "white" }}>Ayushee shrivastava : <span style={{ 'color': "skyblue" }}>3 song</span></p>

                            <div>
                                <input type="text" style={{'width':'45%','padding':'5px','border':'2px solid springgreen','borderRadius':'16px'}} placeholder=" search song title"  /><span>     </span>
                                {/* <button style={{'borderRadius':'16px','border':'2px solid springgreen','backgroundColor':'springgreen'}} className="btn btn-light "> search </button> */}

                                {/* Apply filters */}
                            </div>
                        </div>
                    </div>
                </div>
                <hr color="#fff" />
                <div >
                    <div className="row">
                        <div style={{'width':'100%'}}>
                        <ListGroup className="mb-2" style={{'width':'100%'}} horizontal='lg'>
                                <ListGroup.Item style={{'width':'100%','backgroundColor':'springgreen'}}>Title</ListGroup.Item>
                                <ListGroup.Item style={{'width':'100%','backgroundColor':'springgreen'}} >Singer</ListGroup.Item>
                                <ListGroup.Item style={{'width':'100%','backgroundColor':'springgreen'}} >Album</ListGroup.Item>
                               
                                <ListGroup.Item style={{'width':'100%','backgroundColor':'springgreen'}} >Length</ListGroup.Item>
                                <ListGroup.Item style={{'width':'100%','backgroundColor':'springgreen'}} ></ListGroup.Item>
                            </ListGroup>

                            <ListGroup style={{'width':'100%'}} horizontal='lg'>
                                <ListGroup.Item style={{'width':'100%'}}>Perfect</ListGroup.Item>
                                <ListGroup.Item style={{'width':'100%'}} >Ed shreen</ListGroup.Item>
                                <ListGroup.Item style={{'width':'100%'}} >Perfect</ListGroup.Item>
                               
                                <ListGroup.Item style={{'width':'100%'}} >3.2min</ListGroup.Item>
                                <ListGroup.Item style={{'width':'100%'}} >X</ListGroup.Item>
                            </ListGroup>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default PlaylistDetail;