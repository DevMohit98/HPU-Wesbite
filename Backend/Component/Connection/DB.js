const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/HPU", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection established with database");
  })
  .catch((e) => {
    console.log(e);
  });
