const express = require("express");
const StudentReg = require("./Component/Route/StudentReg");
const StudentLogin = require("./Component/Route/StudentLogin");
const CompleteReg = require("./Component/Route/CompleteReg");
const cors = require("cors");
const {
  Formvalidation,
  LoginValidation,
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
app.listen(8080, () => {
  console.log(" server started");
});
