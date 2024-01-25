const express = require("express");
const authController = require("../controller/auth"); //controller 이용
const router = express.Router();

router.post("/signup", authController.register);
router.post("/login", authController.login);
router.get("/checkEmail/:email", authController.checkEmail);
router.get("/checkNickname/:nickname", authController.checkNickname);

module.exports = router;
