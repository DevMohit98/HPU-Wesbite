import React, { useEffect } from "react";
import "../App.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "./Context";
const CompleteReg = () => {
  const {
    RegsiteredData,
    setRegisterData,
    RegisterForm,
    HandleCompleteRegsiter,
    options,
    HandleOptions,
  } = useGlobalContext();
  const { name } = useParams();
  const FetchStudentDetails = () => {
    axios
      .get(`http://localhost:8080/register/name=${name}`)
      .then((res) => {
        setRegisterData(res.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    FetchStudentDetails();
    // eslint-disable-next-line
  }, []);
  const HandleCompleteReg = (e) => {
    e.preventDefault();
    const Details = {
      FullName: RegisterForm.FullName,
      FatherName: RegisterForm.FatherName,
      MotherName: RegisterForm.MotherName,
      Address: RegisterForm.Address,
      DOB: RegisterForm.DOB,
      Course: options,
    };
    axios
      .post(`http://localhost:8080/register/name=${name}`, Details)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      <section>
        <div className="Screenbg"></div>
        <div className="registerationBg p-3">
          <div className="container">
            {RegsiteredData.map((items) => {
              const { Name, _id } = items;
              return (
                <h1 className="userGreeting" key={_id}>
                  Hello <span className="userName">{Name}</span>,
                </h1>
              );
            })}

            <h2 className="regMsg">
              Complete Your <span>Registeration</span>.
            </h2>
            <div className="filled-details">
              <div className="d-flex justify-content-center align-items-center flex-column">
                <h2 className="title">Already Filled Details</h2>
                <hr />
              </div>
              {RegsiteredData.map((items) => {
                const { EmailID, Name, _id } = items;
                return (
                  <div key={_id}>
                    <div className="mb-4">
                      <label htmlFor="Name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="Name"
                        value={Name}
                        disabled
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
                        value={EmailID}
                        disabled
                      ></input>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="Not-filled-details">
              <div className="d-flex justify-content-center align-items-center flex-column">
                <h2 className="title">Fill the Following Details</h2>
                <hr />
              </div>
              <form onSubmit={HandleCompleteReg}>
                <div className="mb-4">
                  <label htmlFor="FullName" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="FullName"
                    placeholder="Enter Your Full name"
                    value={RegisterForm.FullName}
                    onChange={HandleCompleteRegsiter}
                  ></input>
                </div>
                <div className="mb-4">
                  <label htmlFor="FatherName" className="form-label">
                    Father Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="FatherName"
                    placeholder="Enter Your Father Name"
                    value={RegisterForm.FatherName}
                    onChange={HandleCompleteRegsiter}
                  ></input>
                </div>
                <div className="mb-4">
                  <label htmlFor="MotherName" className="form-label">
                    Mother Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="MotherName"
                    placeholder="Enter Your Mother Name"
                    value={RegisterForm.MotherName}
                    onChange={HandleCompleteRegsiter}
                  ></input>
                </div>
                <div className="mb-4">
                  <label htmlFor="Address" className="form-label">
                    Address
                  </label>
                  <textarea
                    className="form-control"
                    name="Address"
                    rows="3"
                    value={RegisterForm.Address}
                    onChange={HandleCompleteRegsiter}
                  ></textarea>
                </div>
                <div className="mb-4">
                  <label htmlFor="DOB" className="form-label">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    name="DOB"
                    value={RegisterForm.DOB}
                    onChange={HandleCompleteRegsiter}
                  ></input>
                </div>
                <div className="mb-4">
                  <label htmlFor="Course" className="form-label">
                    Course
                  </label>
                  <select
                    onChange={HandleOptions}
                    value={options}
                    className="form-select"
                  >
                    <option value="MCA">MCA</option>
                    <option value="Mtech">Mtech</option>
                    <option value="PHD">PHD</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="Picture" className="form-label">
                    Profile Picture
                  </label>
                  <input className="form-control" type="file" name="Picture" />
                </div>
                <div className="mb-4">
                  <label htmlFor="Signature" className="form-label">
                    Signature
                  </label>
                  <input
                    className="form-control"
                    type="file"
                    name="Signature"
                  />
                </div>
                <div className="form-check mb-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    only check this ,if you have filled all the details correct.
                  </label>
                </div>
                <div className="d-flex justify-content-end">
                  <button className="btn btn-primary" type="submit">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default CompleteReg;
