const express = require("express");
const upload = require("../middleware/multer");
const User = require("../controller/userController");

const router = express.Router();

router.post("/sign-up", upload.none(), User.userRegistration);
router.post("/log-in", User.userLogin);

module.exports = router;
