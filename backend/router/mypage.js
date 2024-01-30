const express = require("express");
const medicineInfoController = require("../controller/medicineInfo"); //controller 이용
const router = express.Router();

router.get("/:nickname", medicineInfoController.SearchMedicine);
module.exports = router;
