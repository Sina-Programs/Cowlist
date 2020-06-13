const mysql = require("mysql");

const connection = mysql.createConnection({
  user: "root",
  password: "mySQLDBMS",
  database: "cows2",
});

connection.connect();

module.exports = connection;
