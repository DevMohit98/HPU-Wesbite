const express = require("express");
const StudentReg = require("./Component/Route/StudentReg");
const StudentLogin = require("./Component/Route/StudentLogin");
const CompleteReg = require("./Component/Route/CompleteReg");
const { Student } = require("./Component/Model/Model");
const upload = require("./Component/Validator/Image");
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
            ProfilePicture: req.file.path,
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
app.listen(8080, () => {
  console.log(" server started");
});
