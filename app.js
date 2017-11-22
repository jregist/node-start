const express = require("express"),
  path = require("path"),
  bodyParser = require("body-parser"),
  fs = require('fs'),
  env = process.env.NODE_ENV || 'development',
  mongoose = require("mongoose"),
  settings = require("./settings"),
  db = require("./models/db"),
  hostName = require('os').hostname(),
  question = require("./models/question"),
  questions = require("./routes/questions"),
  logger = require('./logger'),
  app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// catch 404 and forward to error handler
/* app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.notFound = true;
  next(err);
});
 */

app.use("/api/questions", questions);

// routes starting with `/api`
/* app.all("/api/*", requireLogin, function (req, res, next) {
  next(); // if the middleware allowed us to get here,
  // just move on to the next route handler
}); */

app.get('*', function(req, res, next) {
  var err = new Error();
  err.statusCode = 404;
  err.message = 'An unknown route was requested';
  next(err);
});

app.use(function (err, req, res, next) {
	/* We log the error internaly */
    logger.error(err);

	/*
     * Remove Error's `stack` property. We don't want
     * users to see this at the production env
     */
    if (req.app.get('env') !== 'development') {
        delete err.stack;
    }

	/* Finaly respond to the request */
    res.status(err.statusCode || 500).json(err);
});


const port = process.env.PORT || "3000";
app.set("port", port);

app.listen(port, function() {
  logger.log("info", "Server started on port " + port + "...", {host: hostName, stage: env});
});