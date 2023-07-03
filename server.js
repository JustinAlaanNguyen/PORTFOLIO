//https://gold-sturgeon-wear.cyclic.app

var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/website.html");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT, () =>{console.log("Application started and Listening on port 8080");});

//note switched to netifly