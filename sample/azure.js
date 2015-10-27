
var mongodb = require('mongodb');


var MongoClient = mongodb.MongoClient;


var url = 'mongodb://127.0.0.1/test';


MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    
    console.log('Connection established to', url);

    
    var collection = db.collection('instance');
	collection.ensureIndex({inst_id:1}, {unique:true});
	
	var list39 = {inst_id: 39, inst_type: 'A0', cores: 1, ram: '0.75GB', disk_size: '20GB', prov_id: 'azure'};
	var list40 = {inst_id: 40, inst_type: 'A1', cores: 1, ram: '1.75GB', disk_size: '70GB', prov_id: 'azure'};
	var list41 = {inst_id: 41, inst_type: 'A2', cores: 2, ram: '3.5GB', disk_size: '135GB', prov_id: 'azure'};
	var list42 = {inst_id: 42, inst_type: 'A3', cores: 4, ram: '7GB', disk_size: '285GB', prov_id: 'azure'};
	var list43 = {inst_id: 43, inst_type: 'A4', cores: 8, ram: '14GB', disk_size: '605GB', prov_id: 'azure'};
	var list44 = {inst_id: 44, inst_type: 'A5', cores: 2, ram: '14GB', disk_size: '135GB', prov_id: 'azure'};
	var list45 = {inst_id: 45, inst_type: 'A6', cores: 4, ram: '28GB', disk_size: '285GB', prov_id: 'azure'};
	var list46 = {inst_id: 46, inst_type: 'A7', cores: 8, ram: '56GB', disk_size: '605GB', prov_id: 'azure'};
	var list47 = {inst_id: 47, inst_type: 'A8', cores: 8, ram: '56GB', disk_size: '382GB', prov_id: 'azure'};
	var list48 = {inst_id: 48, inst_type: 'A9', cores: 16, ram: '112GB', disk_size: '382GB', prov_id: 'azure'};
	var list49 = {inst_id: 49, inst_type: 'A10', cores: 8, ram: '56GB', disk_size: '382GB', prov_id: 'azure'};
	var list50 = {inst_id: 50, inst_type: 'A11', cores: 16, ram: '112GB', disk_size: '382GB', prov_id: 'azure'};
	var list51 = {inst_id: 51, inst_type: 'D1', cores: 1, ram: '3.5GB', disk_size: '50GB', prov_id: 'azure'};
	var list52 = {inst_id: 52, inst_type: 'D2', cores: 2, ram: '7GB', disk_size: '100GB', prov_id: 'azure'};
	var list53 = {inst_id: 53, inst_type: 'D3', cores: 4, ram: '14GB', disk_size: '200GB', prov_id: 'azure'};
	var list54 = {inst_id: 54, inst_type: 'D4', cores: 8, ram: '28GB', disk_size: '400GB', prov_id: 'azure'};
	var list55 = {inst_id: 55, inst_type: 'D11', cores: 2, ram: '14GB', disk_size: '100GB', prov_id: 'azure'};
	var list56 = {inst_id: 56, inst_type: 'D12', cores: 4, ram: '28GB', disk_size: '200GB', prov_id: 'azure'};
	var list57 = {inst_id: 57, inst_type: 'D13', cores: 8, ram: '56GB', disk_size: '400GB', prov_id: 'azure'};
	var list58 = {inst_id: 58, inst_type: 'D14', cores: 16, ram: '112GB', disk_size: '800GB', prov_id: 'azure'};
	var list59 = {inst_id: 59, inst_type: 'G1', cores: 2, ram: '28GB', disk_size: '384GB', prov_id: 'azure'};
	var list60 = {inst_id: 60, inst_type: 'G2', cores: 4, ram: '56GB', disk_size: '768GB', prov_id: 'azure'};
	var list61 = {inst_id: 61, inst_type: 'G3', cores: 8, ram: '112GB', disk_size: '1536GB', prov_id: 'azure'};
	var list62 = {inst_id: 62, inst_type: 'G4', cores: 16, ram: '224GB', disk_size: '3072GB', prov_id: 'azure'};
	var list63 = {inst_id: 63, inst_type: 'G5', cores: 32, ram: '448GB', disk_size: '6144GB', prov_id: 'azure'};
	
	
    // Insert some users
    collection.insert([list39,list40,list41,list42,list43,list44,list45,list46,list47,list48,list49,list50,list51,list52,list53,list54,list55,list56,list57,list58,list59,list60,list61,list62,list63], function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log('Inserted %d documents into the "users" collection. The documents inserted with "_id" are:', result.length, result);
      }
      //Close connection
      db.close();
    });
  } 
});