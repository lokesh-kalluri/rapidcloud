var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;
var collections = ['aws'];
MongoClient.connect('mongodb://127.0.0.1:27017/test', function (err, db) {
    if (err) {
        throw err;
    } else {
        console.log("successfully connected to the database");
    }
    db.close();
});

function list(region, ostype, instname){
	this.region = region;
	this.ostype = ostype;
	this.instname = instname;
}

var list1 = new list("us-east","linux","t2.micro");