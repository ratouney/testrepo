var express = require("express");
var app = express();

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