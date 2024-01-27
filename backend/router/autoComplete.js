const express = require("express");
const autoCompleteController = require("../controller/autoComplete"); //controller 이용
const router = express.Router();

router.get("/", autoCompleteController.autoSearch);

module.exports = router;
