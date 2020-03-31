var express = require("express");
var app = express();

app.get("/webhooks/github", function(req, res) {
    res.json({msg: "This is the get request yo retard"});
})

app.post("/webhooks/github", function (req, res) {
    console.log("Received reference :", req.body.ref);

})

app.listen(3000, function() {
    console.log("Server is running and waiting for connections");
})