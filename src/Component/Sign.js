import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import sign from "../Assets/sign.svg";
import { useGlobalContext } from "./Context";
import GoogleLogin from "react-google-login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const Sign = () => {
  const { info, HandleChange, setInfo } = useGlobalContext();
  const HandleForm = (event) => {
    event.preventDefault();
    const StudentInfo = {
      Name: info.Name,
      EmailID: info.Email,
      Password: info.Pass,
    };
    axios
      .post("http://localhost:8080/studentReg/sign", StudentInfo)
      .then((res) => {
        console.log(res);
        window.location = `registeration/name=${info.Name}`;
      })
      .catch((res) => {
        if (res.response.data.response === "false") {
          res.response.data.errors.map((items) => {
            return toast.error(items, {
              position: "top-center",
              hideProgressBar: false,
              theme: "colored",
            });
          });
        }
      });
    setInfo({
      Name: "",
      Email: "",
      Pass: "",
    });
  };
  return (
    <>
      <section>
        <div className="Screenbg"></div>
        <div className="loginSignBg">
          <div className="row">
            <div className="col col-xl-6">
              <div className="left-col d-flex justify-content-center align-items-center p-4">
                <img src={sign} alt="sign"></img>
              </div>
            </div>
            <div className="col col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="right-col p-4">
                <div className="CreateAccount">
                  <div className="CreateAccount-Content">
                    <Link to="/login" className="CreateAccount-link">
                      Already have an account ?
                    </Link>
                    <button className="btn btn-primary button mx-3">
                      Log in
                    </button>
                  </div>
                </div>
                <div className="container">
                  <h2 className="create-title">Create your free account</h2>
                  <form className="login-form" onSubmit={HandleForm}>
                    <div className="mb-4">
                      <label htmlFor="Name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="Name"
                        placeholder="Your name"
                        value={info.Name}
                        onChange={HandleChange}
                      ></input>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="Email" className="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        name="Email"
                        placeholder="example@gmail.com"
                        value={info.Email}
                        onChange={HandleChange}
                      ></input>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="Password" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        name="Pass"
                        placeholder="Enter password"
                        value={info.Pass}
                        onChange={HandleChange}
                      ></input>
                    </div>
                    <button className="btn btn-primary" type="submit">
                      create your account
                    </button>
                  </form>
                  <h2 className="text-center line">or</h2>
                  <GoogleLogin className="googlelogin" />
                  <p className="mt-4">
                    By signing up,you agree to our communication and usage terms
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};
export default Sign;
