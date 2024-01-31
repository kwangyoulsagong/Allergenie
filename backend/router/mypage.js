const express = require("express");
const mypageController = require("../controller/mypage"); //controller 이용
const router = express.Router();

router.get("/:nickname", mypageController.Mypage);
router.get(
  "/medicine/info/:medicineId/:name",
  mypageController.selectedMedicine
);
module.exports = router;
