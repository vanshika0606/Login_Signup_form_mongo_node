const express = require("express");

const {signup, login} = require("./controller");

const router = express.Router();

router.route("/Signup").post(signup);
router.route("/").post(login);

module.exports = router;