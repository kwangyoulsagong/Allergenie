const connection = require("../databases/db"); // mysql 연결

async function autoSearch(req, res) {
  try {
    const search = req.query.search;
    const pageNo = req.query.pageNo;

    const medicineResult =
      "SELECT * FROM Medicine WHERE name LIKE ? LIMIT ?, 10";
    const offset = (pageNo - 1) * 10;
    const result = await connection.query(medicineResult, [
      `%${search}%`,
      offset,
    ]);
    if (result.length > 0) {
      console.log("Matching records found.", result);
      // Do something with the result, e.g., send it in the response.
    } else {
      console.log("No matching records found.");
      // Send an appropriate response when no records are found
    }
  } catch (error) {
    console.log(error);
  }
}
module.exports = { autoSearch };
