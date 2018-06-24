var express = require("express")
var bodyParser = require("body-parser")
var methodOverride = require("method-override")
var exphbs = require("express-handlebars")

var connection = require("./config/connection.js")

var app = express()
app.use(bodyParser.urlencoded({extended: false}))

app.use(methodOverride("_method"))
app.engine("handlebars", exphbs({defaultLayout: "main"}))
app.set("view engine", "handlebars")

var PORT = process.env.PORT || 3000

app.listen(PORT, function() {
    console.log("Eat Da Burger listening on PORT " + PORT)
})




app.get("/", function(req,res) {
    connection.query("SELECT * FROM burgers;", function(err, data) {
        res.render("index", {burgers:data})
        console.log(data)
    })
})

app.post("/create", function(req, res) {
    connection.query("INSERT INTO burgers (burger) VALUES (?);", [req.body.burger], function(err, result) {
        if(err) throw err
        res.redirect("/")
    })
})

app.put("/update", function(req, res) {
    connection.query("UPDATE burgers SET burger = ? WHERE id = ?;", [req.body.devourer, req.body.id], function(err, results) {
        if(err) throw err
        res.redirect("/")
    })
})