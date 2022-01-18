import React from "react";
import { connect } from "react-redux";
import user from "../Images/user.png";
function Profile({users}) {
    console.log(users)
  return (
    <div>
      <div className="container mt-4 mb-4">
        <h2 style={{ fontSize: "45px", color: "green", fontWeight: "bold" }}>
          Welcome! <span style={{ color: "black" }}>to your profile</span>{" "}
        </h2>
        <div className="card mt-3 p-2">
          <div className="card-body">
            <div className="">
              <div className="row">
                <div className="col-lg-6">
                  <img src={user} height={400} width='100%' />
                </div>
                <div className="col-lg-6">
                  <div class="list-group mt-4">
                    <button
                      type="button"
                      className="list-group-item list-group-item-action active"
                      aria-current="true"
                    >
                      {users.first_name + " " + users.last_name}
                    </button>
                    <button
                      type="button"
                      className="list-group-item list-group-item-action"
                    >
                      Email : {users.email}
                    </button>
                    <button
                      type="button"
                      className="list-group-item list-group-item-action"
                    >
                      Location : {users.location}
                    </button>
                    <button
                      type="button"
                      className="list-group-item list-group-item-action"
                    >
                      Mobile No : +91 {users.mobile_no}
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
