const express = require("express");
const StudentReg = require("./Component/Route/StudentReg");
const StudentLogin = require("./Component/Route/StudentLogin");
const CompleteReg = require("./Component/Route/CompleteReg");
const { Student } = require("./Component/Model/Model");
const Admin = require("./Component/Route/Admin");
const upload = require("./Component/Validator/Image");
const SubmtedAssignment = require("./Component/Validator/Assignment");
const cors = require("cors");
const {
  Formvalidation,
  LoginValidation,
  CompleteRegValidation,
} = require("./Component/Validator/Validation");
// middleware
const app = express();
require("./Component/Connection/DB");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use("/public", express.static("public"));
//api
app.use("/studentReg", Formvalidation, StudentReg);
app.use("/studentLogin", LoginValidation, StudentLogin);
app.use("/register", CompleteReg);
// api to upload additional data with image
app.post("/register/name=:name", upload, CompleteRegValidation, (req, res) => {
  const { name } = req.params;
  const { FullName, FatherName, MotherName, Address, DOB, Course } = req.body;
  console.log(req.file);
  const insertAdditional = async (name) => {
    try {
      const AdditionalInfo = await Student.updateOne(
        { Name: name },
        {
          $set: {
            FullName: FullName,
            FatherName: FatherName,
            MotherName: MotherName,
            Address: Address,
            DOB: DOB,
            Course: Course,
            ProfilePicture: req.file.filename,
          },
        }
      );
      res.json({ response: true, data: AdditionalInfo });
    } catch (e) {
      console.log(e);
    }
  };
  insertAdditional(name);
});
// api to add assignment
app.post("/assignmet/name=:name", SubmtedAssignment, (req, res) => {
  const { name } = req.params;
  const { StudentRollNo, AssignmentName, DateOfSubmission } = req.body;
  const insertAssignment = async (name) => {
    try {
      const AdditionalInfo = await Student.updateOne(
        { Name: name },
        {
          $push: {
            CompletedAssignment: {
              RollNo: StudentRollNo,
              Name: AssignmentName,
              SubmitOn: DateOfSubmission,
              Assignment: req.file.filename,
            },
          },
        }
      );
      res.json({ response: true, data: { AdditionalInfo } });
    } catch (e) {
      console.log(e);
    }
  };
  const DeleteDue = async (name) => {
    try {
      const AdditionalInfo = await Student.updateOne(
        { Name: name },
        {
          $pull: {
            DueAssignment: {
              Name: AssignmentName,
            },
          },
        }
      );
      res.json({ response: true, message: "Submited sucessfully" });
    } catch (e) {
      console.log(e);
    }
  };
  DeleteDue(name);
  insertAssignment(name);
});
app.use("/admin", Admin);
app.listen(8080, () => {
  console.log(" server started");
});
