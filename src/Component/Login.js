import React from "react";
import "../App.css";
import login from "../Assets/login.svg";
import GoogleLogin from "react-google-login";
import { useGlobalContext } from "./Context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
const Login = () => {
  const { LogIn, HandleLogin, setLogin } = useGlobalContext();
  const SubmitLogin = (event) => {
    event.preventDefault();
    const LoginDetails = {
      EmailID: LogIn.Email,
      Password: LogIn.Pass,
    };
    axios
      .post("http://localhost:8080/studentLogin/login", LoginDetails)
      .then((res) => {
        console.log(res.data);
        if (res.data.response === "true") {
          toast.success(res.data.login, {
            position: "top-center",
            hideProgressBar: false,
            theme: "colored",
          });
        } else {
          toast.error(res.data.login, {
            position: "top-center",
            hideProgressBar: false,
            theme: "colored",
          });
        }
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
    setLogin({
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
                <img src={login} alt="login"></img>
              </div>
            </div>
            <div className="col col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="right-col p-4">
                <div className="CreateAccount">
                  <div className="CreateAccount-Content">
                    <h1 className="CreateAccount-link">
                      Don't have an account ?
                    </h1>
                    <button className="btn btn-primary mx-3">Sign in</button>
                  </div>
                </div>
                <div className="container">
                  <h2 className="create-title">Log in into your account</h2>
                  <form className="login-form" onSubmit={SubmitLogin}>
                    <div className="mb-4">
                      <label htmlFor="Email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        name="Email"
                        placeholder="Enter email"
                        value={LogIn.Email}
                        onChange={HandleLogin}
                      />
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
                        value={LogIn.Pass}
                        onChange={HandleLogin}
                      />
                    </div>
                    <button className="btn btn-primary" type="submit">
                      Log in
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
export default Login;
