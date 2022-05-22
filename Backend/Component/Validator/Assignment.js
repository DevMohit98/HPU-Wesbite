const multer = require("multer");
const Storage = multer.diskStorage({
  destination: (request, file, cb) => {
    cb(null, "public/Assignment");
  },
  filename: (request, file, cb) => {
    cb(null, file.originalname);
  },
});
const SubmtedAssignment = multer({ storage: Storage }).single("file");
module.exports = SubmtedAssignment;
