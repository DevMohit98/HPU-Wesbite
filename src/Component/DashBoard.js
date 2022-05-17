import React from "react";
import "../App.css";
import review from "../Assets/review.jpg";
const DashBoard = () => {
  return (
    <>
      <section>
        <div className="Screenbg"></div>
        <div className="DashBoardBg">
          <div className="dash">
            <div className="user-profile p-3">
              <img
                src={review}
                alt="userImage"
                width="50"
                height="50"
                className="rounded-pill"
              ></img>
              <h1>Mohit Ramola</h1>
            </div>
            <div className="mobile" id="toggle">
              <button className="btn btn-primary" type="button">
                <i class="fa fa-bars"></i>
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
                Log out <i className="fa fa-power-off mx-3"></i>
              </button>
            </ul>
          </div>
          <div className="tab-content p-3" id="tab-content">
            <div className="tab-pane fade show active" id="profile">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
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
