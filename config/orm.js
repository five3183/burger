// Import MySQL connection.
var connection = require("./connection.js");
var orm = {
    all: function(tableInput, cb) {
        connection.query("SELECT * FROM " + tableInput + ";", function(err, result) {
            if(err) throw err
            cb(result)
        })
    },
    update: function(tableInput, condtion, cb) {
        connection.query("UPDATE " + tableInput + " SET devoured=true WHERE id=" + condtion + ";", function(err, result) {
            if(err) throw(err)
            cb(result)
        })
    },
    create: function(tableInput, val, cb) {
        connection.query("INSERT INTO " + tableInput + " (burger) VALUES ('"+ val +"');", function(err, result) {
            if(err) throw err
            cb(result)
        })
    }
}
module.exports = orm