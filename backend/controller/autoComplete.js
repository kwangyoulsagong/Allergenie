const connection = require("../databases/db"); // mysql 연결

async function autoSearch(req, res) {
  try {
    const search = req.query.search;
    const pageNo = req.query.pageNo;
    //전체 검색어 카운트
    const countQuery =
      "SELECT COUNT(*) AS totalCount FROM Medicine WHERE name LIKE ?";
    connection.query(
      countQuery,
      [`%${search}%`],
      async (countError, countResult) => {
        if (countError) {
          console.error("약품 개수 검색 중 오류", countError);
          return;
        }

        const totalCount = countResult[0].totalCount;
        //각페이지당 4개씩
        const pageSize = 4;
        const totalPages = Math.ceil(totalCount / pageSize);
        const offset = (pageNo - 1) * pageSize;
        const medicineResult =
          "SELECT * FROM Medicine WHERE name LIKE ? LIMIT ?, ?";
        connection.query(
          medicineResult,
          [`%${search}%`, offset, pageSize],
          async (resultError, medicineQuery) => {
            if (resultError) {
              console.error("약품 검색 중 오류", resultError);
              return;
            }

            const result = medicineQuery;

            if (result) {
              res.json({ result, pageNo, totalPages });
            } else {
              console.error("약품 정보 없음");
            }
          }
        );
      }
    );
  } catch (error) {
    console.log(error);
  }
}

module.exports = { autoSearch };
