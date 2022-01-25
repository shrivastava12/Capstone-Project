import React from "react";
import { connect } from "react-redux";
import user from "../Images/user.png";
function Profile({users}) {
    console.log(users)
  return (
    <div>
      <div className="container mt-4 mb-4">
        <h2 data-testid='welcome' style={{ fontSize: "45px", color: "green", fontWeight: "bold" }}>
          Welcome! to your profile
        </h2>
        <div className="card mt-3 p-2">
          <div className="card-body">
         
            <div className="">
              <div className="row">
                <div className="col-lg-6">
                  <img src={user} height={400} width='100%' />
                </div>
                <div className="col-lg-6">
                  <div className="list-group mt-4">
                    <button
                      data-testid='username'
                      type="button"
                      className="list-group-item list-group-item-action active"
                      aria-current="true"
                    >
                      {users.first_name + " " + users.last_name}
                    </button>
                    <button
                      data-testid='email'
                      type="button"
                      className="list-group-item list-group-item-action"
                    >
                      {users.email}
                    </button>
                    <button
                      data-testid='location'
                      type="button"
                      className="list-group-item list-group-item-action"
                    >
                     {users.location}
                    </button>
                    <button
                      data-testid='mobile'
                      type="button"
                      className="list-group-item list-group-item-action"
                    >
                     +91 {users.mobile_no}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
    users:state.auth.user,
})
export default connect(mapStateToProps,{})(Profile);
