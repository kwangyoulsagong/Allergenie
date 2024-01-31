const connection = require("../databases/db");

async function Mypage(req, res) {
  const nickname = req.params.nickname;
  const userQuery =
    "SELECT user_id,nickname, email FROM User WHERE nickname = ?";
  connection.query(userQuery, [nickname], async (error, emailResult) => {
    if (error) {
      console.error("이메일 찾는 내부 오류", error);
    }
    const findQUery = "Select medicine_id from prohibition where user_id = ?";
    connection.query(
      findQUery,
      [emailResult[0].user_id],
      async (error, userMedResult) => {
        const prohibitionMed = userMedResult.map((row) => row.medicine_id);
        const findProhibitionQuery =
          "select name from medicine where medicine_id in(?)";
        connection.query(
          findProhibitionQuery,
          [prohibitionMed],
          async (error, prohibitionResult) => {
            res.json({ emailResult, prohibitionResult });
          }
        );
      }
    );
  });
  try {
  } catch (error) {
    console.error("내부 서버 오류", error);
  }
}
module.exports = { Mypage };
