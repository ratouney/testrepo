var express = require("express");

var app = express();

const version = 6;


app.get("/", function(req, res) {
    res.json({version: version});
})

app.listen(1234, function() {
    console.log("Server is running in version", version);
})