var MongoClient = require('mongodb').MongoClient;
var assert = require('assert')
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test';
var http = require('http');
var express = require('express');
var app     = express();



// Connect to the db
MongoClient.connect("mongodb://localhost:27017/test", function(err, db) {

if(err) { return console.dir(err); }
  else {
    console.log("We are connected");
	var instance = db.collection('instance');
	var region = db.collection('region');
	
	region.findOne(({$and: [{"region_name": "Brazil South"},{"os_type": "windows"}]}), function(err, result){
	if(err){
	throw(err);
	}
	else{

	var newr = result.inst_name;

	instance.find({ "inst_id": { "$in": newr } }).toArray(function(err, resultn){
	if(err){
	throw(err);
	}
	else{
	console.log(resultn);
	}
	});
	

	}
	});
	
  }
  db.close();
});

  app.listen(8081, function() {
  console.log('Server running at http://127.0.0.1:8081/');
});




