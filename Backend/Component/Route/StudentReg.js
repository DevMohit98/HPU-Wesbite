const express = require("express");
const { Student } = require("../Model/Model");
const bcrypt = require("bcryptjs");
let router = express.Router();
// inserting data in database
router.route("/sign").post((request, respond) => {
  const { Name, EmailID, Password } = request.body;
  const insertData = async () => {
    const cryptPass = await bcrypt.hash(Password, 10);
    try {
      const Info = {
        Name: Name,
        EmailID: EmailID,
        Password: cryptPass,
      };
      const result = await Student.insertMany([Info]);
      respond.json({ response: "true", data: result });
    } catch (e) {
      console.log(e);
    }
  };
  insertData();
});
module.exports = router;
