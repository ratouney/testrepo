var express = require("express");
var bodyParser = require('body-parser')
var app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


let temp = {msg: "Nothing yet"};

app.get("/webhooks/github", function(req, res) {
    res.json(temp);
})

app.post("/webhooks/github", function (req, res) {
    console.log("Received request :", req);
    temp = req;

})

app.listen(3000, function() {
    console.log("Server is running and waiting for connections");
})