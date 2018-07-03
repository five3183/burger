// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "g8mh6ge01lu2z3n1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "urpt1lyi2vwwbno0",
  password: "futt0rww9y1fnkt3",
  database: "o4itzq2l45ayysil"
});

// Make connection.
connection.connect(function(err) {
  if (err) throw err
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;