var express = require('express');
var bodyParser = require('body-parser');
var app     = express();

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert')
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test';

//Note that in version 4 of express, express.bodyParser() was
//deprecated in favor of a separate 'body-parser' module.
 

//app.use(express.bodyParser());

/*app.post('/myaction', function(req, res) {
  //res.send('Welcome "' + req.body.username + '".');
  var region_name = req.body.region;
  var os = req.body.os;
  var provdname = req.body.provname;
  console.log(region_name);
  console.log(os);
  res.send('Region "' + req.body.region + '".');
 // console.log(provdname);
});*/


// Connect to the db
MongoClient.connect("mongodb://localhost:27017/test", function(err, db) {

	if(err) { 
		return console.dir(err); 
			}
		else {
			console.log("We are connected");
			var instance = db.collection('instance');
			var region = db.collection('region');
			
			
			app.use(bodyParser.urlencoded({ extended: true }));
			app.post('/myaction', function(req, res) {
												//res.send('Welcome "' + req.body.username + '".');
			var region_name = req.body.region;
			var os = req.body.os;
											   //var provdname = req.body.provname;
			console.log(region_name);
			console.log(os);
  //res.send('Region "' + req.body.region + '".');
  
			region.findOne(({$and: [{"region_name": "us-east-1"},{"os_type": "linux"}]}).toArray( function(err, result){
				if(err){
					throw(err);
				}
			else{
				console.log(result);
				var newr = result.inst_name;
				console.log(newr);

			instance.find({ "inst_id": { "$in": newr } }).toArray(function(err, resultn){
				if(err){
				throw(err);
					}
				else{
				console.log(resultn);
//app.post('/myaction', function(req, res) {
				res.send(resultn);
		//});
					}
			});
	

				}
		});
	
 // console.log(provdname);
	});

	
	}
});



app.listen(8081, function() {
  console.log('Server running at http://127.0.0.1:8081/');
});



