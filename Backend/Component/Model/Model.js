const mongoose = require("mongoose");
const { StudentSchema } = require("../Schema/Schema");
const Student = new mongoose.model("Student", StudentSchema);
module.exports = { Student };
