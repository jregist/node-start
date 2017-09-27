var db = require("../core/db");
var httpMsgs = require("../core/httpMsgs");
var settings = require("../settings.js");
//var async = require("async");
//var redis = require('redis');
//var client = redis.createClient();
//var Redis = require('ioredis');
//var redis = new Redis();

//var NodeCache = require("node-cache");
//var Cache = new NodeCache();
var results = [];

exports.getAuth = function (req, res) {
  
//  async.series({
//    one: function (callback) {
//      var username = 'anonymous';
//      if (settings.serverEnv === 'iisnode') {
//        username = req.headers['x-iisnode-auth_user'].split('\\')[1];
//      }
//      else {
//        username = 'perkinswill\\harrisonp';
//        username = username.split('\\')[1];
//      }
//      cb(null, username);
//    },
//    two: function (username, callback) {
//      var role = "None";
//      client.get(username, function (err, reply) {
//        if (err) {
//          return err;
//        } else {
//          role = reply;
//        }
//      });
//      cb(null, role);
//    }
//  },
//// optional callback
//function cb(err, results) {
//    return results;
//  });
}