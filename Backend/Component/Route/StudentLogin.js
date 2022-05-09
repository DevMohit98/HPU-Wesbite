const express = require("express");
const { Student } = require("../Model/Model");
const bcrypt = require("bcryptjs");
let router = express.Router();
// student login api
router.route("/login").post((request, respond) => {
  const { EmailID, Password } = request.body;
  const isLogin = async (mail, pass) => {
    try {
      const FindUser = await Student.findOne({ EmailID: mail });
      const isMatch = await bcrypt.compare(pass, FindUser.Password);
      if (isMatch) {
        return respond.json({ response: "true", login: "login succesfully" });
      } else {
        return respond.json({
          response: "false",
          login: "incorrect email or password",
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
  isLogin(EmailID, Password);
});
module.exports = router;
