'use strict';
const winston = require('winston'),
  CloudWatchTransport = require('winston-aws-cloudwatch'),
  fs = require('fs'),
  logDir = 'logs',  
  
  env = process.env.NODE_ENV || 'development';
  
// Create the log directory if it does not exist
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

//console.log(hostName);

const tsFormat = () => (new Date()).toLocaleTimeString();
const logger = new (winston.Logger)({
  transports: [
    // colorize the output to the console
    new (winston.transports.Console)({
      timestamp: tsFormat,
      colorize: true,
      level: 'info'
    }),
    new (require('winston-daily-rotate-file'))({
      filename: `${logDir}/-results.log`,
      timestamp: tsFormat,
      datePattern: 'yyyy-MM-dd',
      prepend: true,
      level: env === 'development' ? 'verbose' : 'info'
    })
  ]
});

var config = {
  logGroupName: 'speed-logs',
  logStreamName: 'test-initial',
  createLogGroup: true,
  createLogStream: true,
  submissionInterval: 2000,
  batchSize: 20,
  jsonMessage: true,
  awsConfig: {
    accessKeyId: '',
    secretAccessKey: '',
    region: 'us-east-1'
  },
  formatLog: function (item) {
    return item.level + ': ' + item.message + ' ' + JSON.stringify(item.meta)
  }
}

logger.add(CloudWatchTransport, config);

logger.level = process.env.LOG_LEVEL || "silly";

logger.stream = {
    write: function(message, encoding) {
    logger.info(message);
  }
};

module.exports = logger;