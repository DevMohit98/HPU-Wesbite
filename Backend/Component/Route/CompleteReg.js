const express = require("express");
const { Student } = require("../Model/Model");
let router = express.Router();
// api to get the student details
router.route("/name=:name").get((request, respond) => {
  const { name } = request.params;
  const findStudent = async (name) => {
    const StudentDetails = await Student.find({ Name: name });
    console.log(StudentDetails);
    respond.json({ response: true, data: StudentDetails });
  };
  findStudent(name);
});
// inserting other details of student
router.route("/name=:name").post((request, respond) => {
  const { name } = request.params;
  const { FullName, FatherName, MotherName, Address, DOB, Course } =
    request.body;
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
          },
        }
      );
      respond.json({ response: true, data: AdditionalInfo });
    } catch {
      respond.json({ response: false, data: "not inserted" });
    }
  };
  insertAdditional(name);
});
module.exports = router;
