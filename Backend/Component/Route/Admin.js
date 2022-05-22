const express = require("express");
let router = express.Router();
const { Student } = require("../Model/Model");
router.route("/assignment").post((request, respond) => {
  const { Course, Assign, AssignDate } = request.body;
  const addAssignment = async (course) => {
    try {
      const findStudnet = await Student.updateMany(
        { Course: course },
        {
          $push: {
            DueAssignment: { Name: Assign, AssignDate: AssignDate },
          },
        }
      );
      respond.json({ findStudnet });
    } catch {
      respond.send("not inserted");
    }
  };
  addAssignment(Course);
});
module.exports = router;
