const connection = require("../databases/db");

async function SearchMedicine(req, res) {
  const medicineName = req.params.medicineName;

  try {
    const medicineResult = "SELECT * FROM Medicine WHERE name LIKE ?";
    connection.query(medicineResult, [medicineName], async (error, result) => {
      if (error) {
        console.error("약정보 찾는중 에러", error);
      }
      res.json(result);
    });
  } catch (error) {
    console.error("약품 찾는중 오류", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
async function RelatedMedicine(req, res) {
  const medicineId = req.params.medicineId;
  try {
    // MedicineRelated 테이블에서 medicine_id에 해당하는 related_id 찾기
    const relatedQuery =
      "SELECT related_id FROM MedicineRelated WHERE medicine_id = ?";
    connection.query(
      relatedQuery,
      [medicineId],
      async (error, relatedResult) => {
        if (error) {
          console.error("에러");
        }
        console.log(relatedResult);

        // MedicineRelated 테이블에서 얻은 relatedResult를 반복하여 처리
        const relatedIds = relatedResult.map((row) => row.related_id);
        const medicineQuery =
          "SELECT name, image FROM RelatedMedicine WHERE related_id IN (?)";
        connection.query(
          medicineQuery,
          [relatedIds],
          (medicineError, medicineResult) => {
            if (medicineError) {
              console.error("약물 정보 찾기 오류", medicineError);
              return res.status(500).json({ error: "Internal Server Error" });
            }
            console.log(medicineResult);
            // 결과를 클라이언트에 응답
            res.json({ related: medicineResult });
          }
        );
      }
    );
  } catch (error) {
    console.error("약품 찾는중 오류", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
async function sideEffect(req, res) {
  const medicineId = req.params.medicineId;
  const sideEffectQuery =
    "SELECT side_effect_id FROM HaveSideEffect WHERE medicine_id = ?";
  connection.query(
    sideEffectQuery,
    [medicineId],
    async (error, effectResult) => {
      if (error) {
        console.error("부작용 조회 오류", error);
      }
      const sideEffectId = effectResult.map((row) => row.side_effect_id);
      const effectQuery =
        "select name from sideEffect where side_effect_id IN (?)";
      connection.query(
        effectQuery,
        [sideEffectId],
        async (effectError, sideEffectResult) => {
          if (effectError) {
            console.error("부작용 찾는중 에러");
          }
          res.json({ sideEffect: sideEffectResult });
        }
      );
    }
  );
}

module.exports = { SearchMedicine, RelatedMedicine, sideEffect };
