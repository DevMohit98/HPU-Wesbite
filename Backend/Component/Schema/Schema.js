const { type } = require("@testing-library/user-event/dist/type");
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
  ProfilePicture: {
    type: String,
  },
  DueAssignment: [
    {
      Name: {
        type: String,
      },
      AssignDate: {
        type: Date,
      },
    },
  ],
  CompletedAssignment: [
    {
      Name: {
        type: String,
      },
      SubmitOn: {
        type: Date,
      },
      Assignment: {
        type: String,
      },
      RollNo: {
        type: String,
      },
    },
  ],
});
module.exports = { StudentSchema };
