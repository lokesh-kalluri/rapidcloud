var MongoClient = require('mongodb').MongoClient;
var assert = require('assert')
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test';   

MongoClient.connect("mongodb://localhost:27017/test", function(err, db) {

if(err) { return console.dir(err); }
  else {
    console.log("We are connected");
   db.collection('region', function(err, collection) {
        collection.findOne(({$and: [{"region_id": "ap-east-1"},{"os_type": "sles"}]}), function(err, user) {

            db.collection('instance', function(err, collection) {
                var itemsArray = []

                var itemIds = user.inst_name.$id;

                for (var i = 0; i < itemIds.length; i++) {
                    itemIds[i]

                    collection.findOne({ "inst_id": { "$in": itemsIds[i] } }, function(err, item) {

                    itemsArray.push(item);

                    if(itemIds.length === itemsArray.length){

                        //res.send(itemsArray);
						console.log(itemsArray);

                    }

                    });
                };

            });
        });
    });
	}
	});