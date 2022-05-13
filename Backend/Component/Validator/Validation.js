const { check, validationResult } = require("express-validator");
Formvalidation = [
  check("Name").not().isEmpty().withMessage("Name cannot be empty"),
  check("EmailID").isEmail().withMessage("Not a valid Email ID"),
  (request, respond, next) => {
    const errors = validationResult(request);
    if (!errors.isEmpty())
      return respond.status(422).json({
        response: "false",
        errors: errors.array().map((items) => {
          const { msg } = items;
          return msg;
        }),
      });
    next();
  },
];
LoginValidation = [
  check("EmailID").isEmail().withMessage("incoorect email Id"),
  check("Password").not().isEmpty().withMessage("Password cannot be empty"),
  (request, respond, next) => {
    const errors = validationResult(request);
    if (!errors.isEmpty())
      return respond.status(422).json({
        response: "false",
        errors: errors.array().map((items) => {
          const { msg } = items;
          return msg;
        }),
      });
    next();
  },
];
CompleteRegValidation = [
  check("FullName").not().isEmpty().withMessage("Full name cannot be empty"),
  check("FatherName")
    .not()
    .isEmpty()
    .withMessage("Father name cannot be empty"),
  check("MotherName")
    .not()
    .isEmpty()
    .withMessage("Mother name cannot be empty"),
  check("Address").not().isEmpty().withMessage("Address cannot be empty"),
  check("DOB").not().isEmpty().withMessage("Date of Birth cannot be empty"),
  check("Course").not().isEmpty().withMessage("Course cannot be empty"),
  (request, respond, next) => {
    const errors = validationResult(request);
    if (!errors.isEmpty())
      return respond.status(422).json({
        response: "false",
        errors: errors.array().map((items) => {
          const { msg } = items;
          return msg;
        }),
      });
    next();
  },
];
module.exports = { Formvalidation, LoginValidation, CompleteRegValidation };
