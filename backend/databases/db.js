const mysql = require("mysql");
const dbConfig = require("../config/dbconfig");

const connection = mysql.createConnection(dbConfig);

// 데이터베이스 연결
connection.connect((err) => {
  if (err) {
    console.error("데이터베이스 연결 오류:", err);
    return;
  }
  console.log("데이터베이스에 연결되었습니다!");
});

// 예기치 못한 에러 처리
connection.on("error", (err) => {
  console.error("데이터베이스 연결 오류:", err);
  if (err.code === "PROTOCOL_CONNECTION_LOST") {
    console.error("데이터베이스 연결이 닫혔습니다. 다시 연결 중...");
    connection.connect();
  } else {
    throw err;
  }
});

module.exports = connection;
