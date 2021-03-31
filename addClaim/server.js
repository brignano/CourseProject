var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.sendFile(__dirname+ '/addclaimexample.html');
});

app.post('/addclaim', function (req, res) {
	var policynumber = req.body.policynumber;
	var location = req.body.location;
	var category = req.body.category;
	var description = req.body.description;
	res.send('Claim Submitted Successfully!');
	MongoClient.connect(url, function(err, db) {
  		if (err) throw err;
  		var dbo = db.db("testdb");
  		var myobj = { policynumber: policynumber, location: location, category: category, description: description };
 		dbo.collection("claim").insertOne(myobj, function(err, res) {
    			if (err) throw err;
    			console.log("1 document inserted");
   			db.close();
  		});
	}); 
});

app.post('/getCoordinates', function (req, res) {
});

app.post('/getClaims', function (req, res) {
});

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});
