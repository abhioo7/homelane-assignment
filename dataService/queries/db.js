const mysql = require("mysql2");
const dbConfig = require("./dbConfig");
// Create a connection to the database
console.log(dbConfig.db.HOST);
const connection = mysql.createConnection({
  host: dbConfig.db.HOST,
  user: dbConfig.db.USER,
  password: dbConfig.db.PASSWORD,
  database: dbConfig.db.DB
});
// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});
module.exports = connection;