const express = require("express");
const medicineInfoController = require("../controller/medicineInfo"); //controller 이용
const router = express.Router();

router.get("/:medicineName", medicineInfoController.SearchMedicine);
router.get("/medicine/:medicineId", medicineInfoController.RelatedMedicine);
module.exports = router;
