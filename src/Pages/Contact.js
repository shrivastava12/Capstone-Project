import React from "react";
import contact from "../Images/contact.svg";
function Contact() {
  return (
    <div>
      <div class="container" style={{height:'auto'}}>
        <div class="row">
          <div class="col-sm-6" style={{height:'auto'}}>
            <div >
                 <img src={contact}  alt="contact" style={{width:'250px'}}/>           
            </div>   
          </div>
          <div class="col-sm-6 p-3" style={{height:'auto',width:'300px'}}>
            <form>
              <div class="">
                <label for="exampleInputEmail1" class="form-label">
                  Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="">
                <label for="exampleInputPassword1" class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  aria-label="With textarea"
                ></textarea>
              </div>
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
              <button type="submit mt-4" class="btn btn-primary">
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
