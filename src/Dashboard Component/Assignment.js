import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import { useGlobalContext } from "../Component/Context";
import { useParams } from "react-router-dom";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Assignment = () => {
  const { file, HandleImage } = useGlobalContext();
  const { name } = useParams();
  const [DueAssignment, setDueAssignment] = useState("");
  /* Due Assignment section */
  const [Due, setDue] = useState([]);
  const [RollNo, setRollNo] = useState("");
  const FetchAssignment = () => {
    axios.get(`http://localhost:8080/register/name=${name}`).then((res) => {
      res.data.data.map((items) => {
        const { DueAssignment } = items;
        return setDue(DueAssignment);
      });
    });
  };
  const currentDate = new Date();
  const current = moment(currentDate).format("YYYY-MM-DD");
  useEffect(() => {
    FetchAssignment();
    // eslint-disable-next-line
  }, [Due]);
  /* end of Due Assignment section */
  /* form section */
  const HandleRollno = (event) => {
    const value = event.target.value;
    setRollNo(value);
  };
  const HandleDueAssignment = (e) => {
    setDueAssignment(e.target.value);
  };

  const SubmitAssignment = (e) => {
    e.preventDefault();
    const Details = {
      RollNo: RollNo,
      AssignmentName: DueAssignment,
      DateOfSubmission: current,
    };
    const formData = new FormData();
    formData.append("file", file);
    formData.append("StudentRollNo", Details.RollNo);
    formData.append("AssignmentName", Details.AssignmentName);
    formData.append("DateOfSubmission", Details.DateOfSubmission);
    axios
      .post(`http://localhost:8080/assignmet/name=${name}`, formData)
      .then((res) => {
        if (res.data.response === true) {
          toast.success(res.data.message, {
            position: "top-center",
            hideProgressBar: false,
            theme: "colored",
          });
        }
      });
  };

  /* end of from section */
  return (
    <>
      <section className="assignment p-3">
        <div className="row">
          <div className="col col-xl-7">
            <form
              className="AssignmentForm"
              onSubmit={SubmitAssignment}
              encType="multipart/form-data"
            >
              <div className="mb-4">
                <label htmlFor="StudentRollNo" className="form-label">
                  Roll No
                </label>
                <input
                  type="number"
                  value={RollNo}
                  name="StudentRollNo"
                  onChange={HandleRollno}
                  className="form-control"
                  placeholder="Enter Rollnumber"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="assignment" className="form-label">
                  Select Due Assignment
                </label>
                <select
                  value={DueAssignment}
                  onChange={HandleDueAssignment}
                  className="form-select"
                >
                  <option value="none" selected hidden>
                    Select an Option
                  </option>
                  {Due.map((items) => {
                    const { Name, index } = items;
                    return (
                      <option value={Name} key={index}>
                        {Name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="AssignmentFIle" className="form-label">
                  Upload Assignment
                </label>
                <input
                  className="form-control"
                  type="file"
                  onChange={HandleImage}
                />
              </div>
              <div className="d-flex justify-content-end">
                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="col col-xl-5">
            <h1 className="due-title">Due Assignment's</h1>
            <div className="card-bg">
              {Due.map((items) => {
                const { Name, AssignDate, index } = items;
                const leftDays = moment(AssignDate).diff(current, "days");
                return (
                  <div className="assignmnet-card p-3" key={index}>
                    <div className="d-flex justify-content-between align-items-center">
                      <h2>{Name}</h2>
                      <span className="left-days">
                        <i className="fa-solid fa-clock"></i>
                        <h2>{`${leftDays} days`}</h2>
                      </span>
                    </div>
                    <h3>{`Due on ${moment(AssignDate).format(
                      "DD-MM-YYYY"
                    )}`}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};
export default Assignment;
