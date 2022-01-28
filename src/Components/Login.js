import { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { login, register } from "../actions/authAction";
import background from "../Images/background.png";
import UseUnsavedChangesWarning from "./UseUnsavedChangesWarning";


const Login = ({ register, login, isAuthenticated,error }) => {
  const myStyle = {
    backgroundImage: `url(${background})`,
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const [isSignedIn, setISSignedIn] = useState(true);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [password, setPassword] = useState("");
  const [Prompt,setDirty,setPristine] = UseUnsavedChangesWarning();

  const onClick = () => {
    setISSignedIn(!isSignedIn);
  };

  const onhandleSubmit = (e) => {

    e.preventDefault();
    setPristine();
    if (isSignedIn) {
      console.log("signed in");
      login(email, password);
      setEmail("");
      setPassword("");
      
    } else {
      console.log("sign up");
      register(email, password, fname, lname, location, mobileNo);
      setEmail("");
      setFname("");
      setLname("");
      setMobileNo("");
      setLocation("");
      setPassword("");
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div style={myStyle}>
      {Prompt}
      {isSignedIn ? (
        <div className="  h-100 d-flex justify-content-center align-items-center ">
          <div
            style={{
              background: "rgba(0, 0, 0, 0.26)",
              width: "500px",
              height: "500px",
              left: "226px",
              top: " 231px",
            }}
          >
            <div className="p-5 m-3 ">
            <p style={{'color':'#fff'}}>{error}</p>
              <h2
                className="text-center"
                style={{
                  backgroundColor: "#C4C4C4",
                  height: "40px",
                  fontSize: "24px",
                }}
              >
                MUSIQUE
              </h2>
              <h2
                className="mt-5"
                style={{
                  font: "Robot",
                  fontWeight: "500",
                  fontSize: "28px",
                  color: "#fff",
                }}
              >
                Sign In
              </h2>

              <form onSubmit={onhandleSubmit} className="mt-4">
                
                <label style={{ color: "#fff", margin: "0px" }}>Email</label>
                <br />
                <input
                  style={{
                    border: "none",
                    padding: "12px 20x",
                    borderBottom: "1px solid white",
                    backgroundColor: "transparent",
                    outline: "0px",
                    color: "#fff",
                    width: "90%",
                  }}
                  type="text"
                  required
                  name='email'
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    setDirty();
                  } }
                />
                <br />
                <br />
                <label style={{ color: "#fff", margin: "0px" }}>Password</label>
                <br />
                <input
                  style={{
                    border: "none",
                    padding: "12px 20x",
                    borderBottom: "1px solid white",
                    width: "90%",
                    backgroundColor: "transparent",
                    outline: "0px",
                    color: "#fff",
                  }}
                  type="text"
                  required
                  name='password'
                  value={password}
                  onChange={(e) =>{
                    setPassword(e.target.value);
                    setDirty();
                  } }
                />

                <div className="text-center mt-5">
                  <button
                    style={{
                      width: "90%",
                      height: "40px",
                      padding: "10px",
                      margin: "0",
                      border: "none",
                      borderRadius: "40px",
                      background: "rgba(62, 237, 80, 0.81)",
                      color: "#fff",
                      fontWeight: "bold",
                    }}
                  >
                    Sign In
                  </button>
                  <p
                    onClick={onClick}
                    className="mt-4"
                    style={{ color: "#fff" }}
                  >
                    Don't have account? Sign up
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="  h-100 d-flex justify-content-center align-items-center ">
          <div
            style={{
              background: "rgba(0, 0, 0, 0.26)",
              width: "500px",
              height: "550px",
              left: "226px",
              top: " 231px",
            }}
          >
            <div className="p-5 m-3 ">
              <h2
                className="text-center"
                style={{
                  backgroundColor: "#C4C4C4",
                  height: "40px",
                  fontSize: "24px",
                }}
              >
                MUSIQUE
              </h2>
              <h2
                className="mt-3"
                style={{
                  font: "Robot",
                  fontWeight: "500",
                  fontSize: "28px",
                  color: "#fff",
                }}
              >
                Sign Up
              </h2>

              <form onSubmit={onhandleSubmit} className="mt-4">
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label style={{ color: "#fff", margin: "0px" }}>
                      First Name
                    </label>
                    <input
                      style={{
                        border: "none",
                        padding: "12px 20x",
                        borderBottom: "1px solid white",
                        backgroundColor: "transparent",
                        outline: "0px",
                        color: "#fff",
                      }}
                      type="text"
                      value={fname}
                      required
                      onChange={(e) =>{
                        setFname(e.target.value)
                        setDirty();
                      } }
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label style={{ color: "#fff", margin: "0px" }}>
                      Last Name
                    </label>
                    <input
                      style={{
                        border: "none",
                        padding: "12px 20x",
                        borderBottom: "1px solid white",
                        backgroundColor: "transparent",
                        outline: "0px",
                        color: "#fff",
                      }}
                      type="text"
                      required
                      value={lname}
                      onChange={(e) => {
                        setLname(e.target.value)
                        setDirty();
                      } }
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label style={{ color: "#fff", margin: "0px" }}>
                      Email
                    </label>
                    <input
                      style={{
                        border: "none",
                        padding: "12px 20x",
                        borderBottom: "1px solid white",
                        backgroundColor: "transparent",
                        outline: "0px",
                        color: "#fff",
                      }}
                      type="text"
                      required
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                        setDirty();
                      }}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label style={{ color: "#fff", margin: "0px" }}>
                      Location
                    </label>
                    <input
                      style={{
                        border: "none",
                        padding: "12px 20x",
                        borderBottom: "1px solid white",
                        backgroundColor: "transparent",
                        outline: "0px",
                        color: "#fff",
                      }}
                      type="text"
                      required
                      value={location}
                      onChange={(e) =>{
                        setLocation(e.target.value)
                        setDirty();
                      } }
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label style={{ color: "#fff", margin: "0px" }}>
                      Mobile
                    </label>
                    <input
                      style={{
                        border: "none",
                        padding: "12px 20x",
                        borderBottom: "1px solid white",
                        backgroundColor: "transparent",
                        outline: "0px",
                        color: "#fff",
                      }}
                      type="text"
                      required
                      value={mobileNo}
                      onChange={(e) => {
                          setMobileNo(e.target.value)
                          setDirty();
                      }}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label style={{ color: "#fff", margin: "0px" }}>
                      Password
                    </label>
                    <input
                      style={{
                        border: "none",
                        padding: "12px 20x",
                        borderBottom: "1px solid white",
                        backgroundColor: "transparent",
                        outline: "0px",
                        color: "#fff",
                      }}
                      type="text"
                      required
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value)
                        setDirty();
                      } }
                    />
                  </div>
                </div>

                <div className="text-center mt-5">
                  <button
                    style={{
                      width: "90%",
                      height: "40px",
                      padding: "10px",
                      margin: "0",
                      border: "none",
                      borderRadius: "40px",
                      background: "rgba(62, 237, 80, 0.81)",
                      color: "#fff",
                      fontWeight: "bold",
                    }}
                  >
                    Sign Up
                  </button>
                  <p
                    onClick={onClick}
                    className="mt-4"
                    style={{ color: "#fff" }}
                  >
                    have an account? SignIn
                  </p>
                </div>

                <br></br>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error:state.auth.error
});

export default connect(mapStateToProps, { register, login })(Login);
