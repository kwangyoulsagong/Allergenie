const connection = require("../databases/db");

async function addMedication(req, res) {
  const { medicineId, user_id } = req.body;
  try {
    const addQuery =
      "INSERT INTO Prohibition (user_id, medicine_id) VALUES (?, ?)";
    connection.query(
      addQuery,
      [user_id, medicineId],
      async (error, resultQuery) => {
        if (error) {
          console.error("추가중 오류", error);
          return res
            .status(500)
            .json({ success: false, message: "내부서버 오류" });
        }
        res
          .status(201)
          .json({ success: true, message: "성공적으로 추가 완료" });
      }
    );
  } catch (error) {
    console.error("내부 서버 오류", error);
  }
}
async function deleteMedication(req, res) {
  try {
  } catch (error) {
    console.error("내부 서버 오류", error);
  }
}
module.exports = { addMedication, deleteMedication };
