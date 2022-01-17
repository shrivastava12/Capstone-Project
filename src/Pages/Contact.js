import React from "react";
import contact from "../Images/contact.svg";
function Contact() {
  return (
    <div>
      <div className="container p-4 mt-3 mb-3" style={{height:'auto'}}>
        <div className="row">
          <div className="col-sm-6" style={{height:'auto'}}>
            <div >
                 <img src={contact}  alt="contact" style={{width:'100%'}}/>           
            </div>   
          </div>
          <div className="col-sm-6 p-3" style={{height:'auto',width:'300px'}}>
            <form>
              <div className="">
                <label for="exampleInputEmail1" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="">
                <label for="exampleInputPassword1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  aria-label="With textarea"
                ></textarea>
              </div>
          
             
              <button type="submit mt-4" className="btn btn-primary mt-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
