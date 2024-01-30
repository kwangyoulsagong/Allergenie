const express = require("express");
const prohibitionController = require("../controller/prohibition"); //controller 이용
const router = express.Router();

router.post("/add", prohibitionController.addMedication);
router.post("/delete", prohibitionController.deleteMedication);
module.exports = router;
