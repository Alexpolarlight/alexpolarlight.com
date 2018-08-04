var express = require("express");
var app = express();
var path = require("path");

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
    //__dirname : It will resolve to your project folder.
  });

app.use(express.static('src'));
//Store all JS and CSS in Scripts folder.

app.get('/javascripts/jscripts.js', function(req, res) { 
  res.render('jscripts'); 
});




app.listen(80);

console.log("Running at Port 80");