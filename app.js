var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    mongoose = require('mongoose'),
    settings = require("./settings"),
    db = require('./models/db'),
    question = require('./models/question'),
    questions = require('./routes/questions'),
    app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(logger('dev'));

app.use('/api/questions', questions);

// catch 404 and forward to error handler
/*app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
*/

const port = process.env.PORT || '3000';
app.set('port', port);

app.listen(port, function(){
    console.log('Server started on port ' + port + '...');
})