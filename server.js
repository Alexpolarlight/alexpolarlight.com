var express = require("express");
var app = express();
var path = require("path");

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
    //__dirname : It will resolve to your project folder.
  });

app.use(express.static(__dirname + '/src/css'));
//Store all JS and CSS in Scripts folder.

app.use(express.static(__dirname + '/src/javascripts'));
//Store all JS and CSS in Scripts folder.

app.get('/',function(req,res){
  res.sendFile('index.html');
  //It will find and locate index.html from View or Scripts
});



app.listen(3000);

console.log("Running at Port 3000");