const settings = require('../settings'),
  hostName = require('os').hostname(),
  db = require('mongoose'),
  logger = require('../logger');
db.connect(settings.dbConfig);

db.connection.on('connected', function () {  
  logger.info('Mongoose has connected to the database.', {host: hostName});
}); 

// If the connection throws an error
db.connection.on('error',function (err) {  
  logger.error('Mongoose default connection error', {host: hostName, stack:err});
}); 

// When the connection is disconnected
db.connection.on('disconnected', function () {  
  logger.info('Mongoose default connection disconnected', {host: hostName}); 
});

// If the Node process ends, close the Mongoose connection 
process.on('SIGINT', function() {  
  db.connection.close(function () { 
    logger.log('info', 'Mongoose default connection disconnected through app termination', {host: hostName}); 
    process.exit(0);
  });
});