var express = require('express'),
    router = express.Router(),
    Question = require('../models/question'),
    mongoose = require('mongoose'), //mongo connection
    httpMsgs = require('../core/httpMsgs'); //used to manipulate POST

router.route('/')
    //GET all blobs
    .get(function(req, res, next) {
        //retrieve all blobs from Monogo
        mongoose.model('Question').find({}, function (err, questions) {
          if (err) {
                httpMsgs.show500(req, res, err);
                }
            else {
                httpMsgs.sendJson(req, res, questions);
            }
                });
              })
    .post(function(req, res) {
        // Get values from POST request. These can be done through forms or REST calls. These rely on the "name" attributes for forms
        /*
category: { type: String, required: true, unique: true },
      intID: { type: Number, required: true, unique: true },
      categoryOrder: { type: Number, required: true, unique: true },
      questions: [questionItemSchema]
            questionText: { type: String, required: true, unique: false },
            intID: { type: Number, required: true, unique: true },
            questionOrder: { type: Number, required: true, unique: true },
        */
        var questionData = {
            category : req.body.category,
            categoryOrder : req.body.categoryorder,
            intID : req.body.categoryid
        };

        var question = new Question(questionData);
    
        //call the create function for our database
       question.save(function(err, data){
            if(err){
                httpMsgs.show500(req, res, err)
            }
            else{
                httpMsgs.sendJson(req, res, data)
            }
            });
        });

module.exports = router;