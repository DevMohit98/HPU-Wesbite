import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import Profile from "../Dashboard Component/Profile";
const DashBoard = () => {
  const { name } = useParams();
  const [picture, setPicture] = useState({
    ProfilePicture: "",
    Name: "",
  });
  const FetchPicture = () => {
    axios.get(`http://localhost:8080/register/name=${name}`).then((res) => {
      res.data.data.map((items) => {
        const { ProfilePicture, FullName } = items;
        return setPicture({
          ProfilePicture: process.env.REACT_APP_IMAGE_PATH + ProfilePicture,
          Name: FullName,
        });
      });
    });
  };
  useEffect(() => {
    FetchPicture();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <section>
        <div className="Screenbg"></div>
        <div className="DashBoardBg">
          <div className="dash">
            <div className="user-profile p-3">
              <img
                src={picture.ProfilePicture}
                alt="userImage"
                width="50"
                height="50"
                className="rounded-pill"
              ></img>
              <h1>{picture.Name}</h1>
            </div>
            <div className="mobile" id="toggle">
              <button className="btn btn-primary" type="button">
                <i className="fa fa-bars"></i>
              </button>
            </div>
            <ul className="nav nav-pills  p-3 hidetabs" id="dashboard-tabs">
              <li className="nav-item">
                <a
                  href="#profile"
                  className="nav-link active"
                  data-toggle="pill"
                >
                  Profile
                </a>
              </li>
              <li className="nav-item">
                <a href="#assignment" className="nav-link" data-toggle="pill">
                  Assignment's
                </a>
              </li>
              <li className="nav-item">
                <a href="#admitcard" className="nav-link " data-toggle="pill">
                  Admit Card
                </a>
              </li>
              <button className="btn btn-primary">
                Log out <i className="fa fa-power-off"></i>
              </button>
            </ul>
          </div>
          <div className="tab-content p-3" id="tab-content">
            <div className="tab-pane fade show active" id="profile">
              <Profile />
            </div>
            <div className="tab-pane fade " id="assignment">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </p>
            </div>
            <div className="tab-pane fade " id="admitcard">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                third tab
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default DashBoard;
