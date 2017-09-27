var settings = require('../settings');

var db = require('mongoose');
db.connect(settings.dbConfig);

db.connection.on('connected', function () {  
  console.log('Mongoose has connected to the database.');
}); 

// If the connection throws an error
db.connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
}); 

// When the connection is disconnected
db.connection.on('disconnected', function () {  
  console.log('Mongoose default connection disconnected'); 
});

// If the Node process ends, close the Mongoose connection 
process.on('SIGINT', function() {  
  db.connection.close(function () { 
    console.log('Mongoose default connection disconnected through app termination'); 
    process.exit(0);
  });
});