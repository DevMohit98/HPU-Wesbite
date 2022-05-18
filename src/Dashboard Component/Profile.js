import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import moment from "moment";
const Profile = () => {
  const { name } = useParams();
  const [data, setData] = useState({
    Name: "",
    FullName: "",
    FatherName: "",
    MotherName: "",
    Course: "",
    Address: "",
    EmailID: "",
    DOB: "",
  });
  const FetchData = () => {
    axios.get(`http://localhost:8080/register/name=${name}`).then((res) => {
      res.data.data.map((items) => {
        const {
          Name,
          EmailID,
          Address,
          Course,
          DOB,
          FatherName,
          FullName,
          MotherName,
        } = items;
        return setData({
          Name: Name,
          FullName: FullName,
          FatherName: FatherName,
          MotherName: MotherName,
          Course: Course,
          Address: Address,
          EmailID: EmailID,
          DOB: DOB,
        });
      });
    });
  };
  useEffect(() => {
    FetchData();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <section className="profile p-3">
        <form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="Name" className="form-label">
              Name
            </label>
            <input
              type="text"
              value={data.Name}
              className="form-control"
              disabled
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="FullName" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              value={data.FullName}
              disabled
            />
          </div>
          <div className="col-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <label htmlFor="FatherName" className="form-label">
              Father Name
            </label>
            <input
              type="text"
              className="form-control"
              value={data.FatherName}
              disabled
            />
          </div>
          <div className="col-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <label htmlFor="MotherName" className="form-label">
              Mother Name
            </label>
            <input
              type="text"
              className="form-control"
              value={data.MotherName}
              disabled
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="Address" className="form-label">
              Address
            </label>
            <textarea
              className="form-control"
              value={data.Address}
              disabled
            ></textarea>
          </div>
          <div className="col-md-6">
            <label htmlFor="Course" className="form-label">
              Course
            </label>
            <input
              type="text"
              className="form-control"
              value={data.Course}
              disabled
            ></input>
          </div>
          <div className="col-md-6">
            <label htmlFor="Email" className="form-label">
              Email ID
            </label>
            <input
              type="email"
              className="form-control"
              value={data.EmailID}
              disabled
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="DOB" className="form-label">
              DOB
            </label>
            <input
              type="date"
              className="form-control"
              value={moment(data.DOB).format("YYYY-MM-DD")}
              disabled
            />
          </div>
        </form>
      </section>
    </>
  );
};
export default Profile;
