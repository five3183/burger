var express = require("express")
var bodyParser = require("body-parser")
var methodOverride = require("method-override")
var exphbs = require("express-handlebars")

var connection = require("./config/connection.js")

var app = express()
app.use(express.static(__dirname + "/public"))

app.use(bodyParser.urlencoded({extended: false}))

app.use(methodOverride("_method"))

app.engine("handlebars", exphbs({defaultLayout: "main"}))
app.set("view engine", "handlebars")

var routes = require("./controllers/routes.js");
app.use(routes);


var PORT = process.env.PORT || 3000

app.listen(PORT, function() {
    console.log("Eat Da Burger listening on PORT " + PORT)
})