const mongoose = require("mongoose");
// student schema
const StudentSchema = mongoose.Schema({
  Name: {
    type: String,
  },
  EmailID: {
    type: String,
  },
  Password: {
    type: String,
  },
  FullName: {
    type: String,
  },
  FatherName: {
    type: String,
  },
  MotherName: {
    type: String,
  },
  Address: {
    type: String,
  },
  DOB: {
    type: Date,
  },
  Course: {
    type: String,
  },
});
module.exports = { StudentSchema };
