var express = require("express");
var bodyParser = require('body-parser')

var cmd = require('system-commands')
var app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


let status = {lastUpdate: null, data: null, version: 1.1};

app.get("/webhooks/github", function(req, res) {
    res.json(status);
})

app.post("/webhooks/github", function (req, res) {
    console.log("Received request body :", req.body);
    temp = req.body;

    // If the commit has been made on the master branch, do stuff
    if (req.body.ref.indexOf('master') > -1) {
        console.log("Yup, it's pushed to master, do the thing !");
        cmd('deploy_script').then(output => {
            console.log("Script has been run !");
            status.data = output;
            status.data = Date.now();
        })
    }

})

app.listen(3000, function() {
    console.log("Server is running and waiting for connections");
})