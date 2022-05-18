const multer = require("multer");
const path = require("path");
const Storage = multer.diskStorage({
  destination: (request, file, cb) => {
    cb(null, "./images");
  },
  filename: (request, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: Storage }).single("file");
module.exports = upload;
