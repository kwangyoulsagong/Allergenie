const connection = require("../databases/db"); // mysql 연결
const bcrypt = require("bcrypt");

function sendNotificationToClient(res, message) {
  // 응답 메시지 보냄
  res.setHeader("Content-Type", "application/json");
  res.status(200).json({ message });
}

async function register(req, res) {
  const { email, password, nickname } = req.body;
  try {
    // 닉네임 중복체크
    const checkDuplicatenickname =
      "SELECT COUNT(*) as count FROM Users WHERE nickname=?";
    const [duplicateNicknameResults] = await connection.query(
      checkDuplicatenickname,
      [nickname]
    );
    const duplicateCount = duplicateNicknameResults.count;

    // 중복된 닉네임이면
    if (duplicateCount > 0) {
      sendNotificationToClient(
        res,
        "이미 사용중인 닉네임입니다. 다른 닉네임을 입력해주세요."
      );
      return;
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const insertUser =
      "INSERT INTO USERS (email, password, nickname) VALUES (?,?,?)";
    await connection.query(insertUser, [email, hashedPassword, nickname]);
    sendNotificationToClient(res, "등록 성공");
  } catch (error) {
    console.error("에러:", error);
    res.status(500).json({ error: "내부 서버 오류" });
  }
}
module.exports = { register, login };
