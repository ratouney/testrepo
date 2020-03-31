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
    console.log("Received request body :", req.body);
    temp = req.body;

    // If the commit has been made on the master branch, do stuff
    if (req.body.ref.indexOf('master') > -1) {
        console.log("Yup, it's pushed to master, do the thing !");
    }

})

app.listen(3000, function() {
    console.log("Server is running and waiting for connections");
})