const connection = require("../databases/db"); // mysql 연결
const bcrypt = require("bcrypt");

function sendNotificationToClient(res, message) {
  // 응답 메시지 보냄
  res.setHeader("Content-Type", "application/json");
  res.status(200).json({ message });
}
async function checkEmail(req, res) {
  const email = req.params.email;
  console.log(email);
  try {
    const checkDuplicateEmail =
      "SELECT COUNT(*) as count FROM User WHERE email=?";
    connection.query(
      checkDuplicateEmail,
      [email],
      async (duplicateError, [duplicateResults]) => {
        if (duplicateError) {
          console.error("이메일 중복 확인 중 에러:", duplicateError);
          return;
        }
        const duplicateCount = duplicateResults.count;
        console.log(duplicateCount);
        let check = false;
        // 중복된 이메일이면
        if (duplicateCount > 0) {
          res.json(check);
          return;
        } else {
          check = true;
          res.json(check);
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
}
async function checkNickname(req, res) {
  const nickname = req.params.nickname;
  try {
    const checkDuplicateNickname =
      "SELECT COUNT(*) as count FROM User WHERE nickname=?";
    connection.query(
      checkDuplicateNickname,
      [nickname],
      async (duplicateError, [duplicateResults]) => {
        if (duplicateError) {
          console.error("닉네임 중복 확인 중 에러:", duplicateError);
          return;
        }
        const duplicateCount = duplicateResults.count;
        console.log(duplicateCount);
        let check = false;
        // 중복된 닉네임이면
        if (duplicateCount > 0) {
          res.json(check);
          return;
        } else {
          check = true;
          res.json(check);
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
}
async function register(req, res) {
  const { email, password, nickname } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const insertUser =
      "INSERT INTO User (email, password, nickname) VALUES (?,?,?)";
    await connection.query(insertUser, [email, hashedPassword, nickname]);
    sendNotificationToClient(res, "등록 성공");
  } catch (error) {
    console.error("에러:", error);
    res.status(500).json({ error: "내부 서버 오류" });
  }
}
async function login(req, res) {
  const { email, password } = req.body;
  try {
    //회원이 존재하는 지 판단 쿼리
    const getUserQuery = "SELECT * FROM User WHERE email =? ";
    connection.query(
      getUserQuery,
      [email],
      async (userError, [userResults]) => {
        if (userError) {
          console.error("유저 정보 조회 오류", userError);
          return;
        }
        if (!userResults) {
          sendNotificationToClient(res, "존재하지 않는 회원입니다.");
          return;
        }
        //회원의 비밀번호 있는지 판단 쿼리
        const isPasswordValid = await bcrypt.compare(
          password,
          userResults.password
        );
        if (isPasswordValid) {
          const { email, password, nickname } = userResults;
          return res.json({ email, password, nickname });
        } else {
          sendNotificationToClient(res, "비밀번호 일치하지 않습니다.");
        }
      }
    );
  } catch (error) {
    console.error("에러:", error);
    res.status(500).json({ error: "내부 서버 오류" });
  }
}
module.exports = { register, login, checkEmail, checkNickname };
