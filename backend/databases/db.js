const mysql = require("mysql");
const dbConfig = require("../config/dbconfig");

const connection = mysql.createConnection(dbConfig);

module.exports = connection;
