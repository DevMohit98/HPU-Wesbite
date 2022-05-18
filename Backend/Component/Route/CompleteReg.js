const express = require("express");
const { Student } = require("../Model/Model");
let router = express.Router();
// api to get the student details
router.route("/name=:name").get((request, respond) => {
  const { name } = request.params;
  const findStudent = async (name) => {
    const StudentDetails = await Student.find({ Name: name });
    respond.json({ response: true, data: StudentDetails });
  };
  findStudent(name);
});
module.exports = router;
