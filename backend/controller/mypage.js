const connection = require("../databases/db");

async function Mypage(req, res) {
  const nickname = req.params.nickname;
  try {
  } catch (error) {
    console.error("내부 서버 오류", error);
  }
}
module.exports = { Mypage };
