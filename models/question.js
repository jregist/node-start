var mongoose = require('mongoose');
var Schema = mongoose.Schema;


/*var childSchema = new Schema({ name: 'string' });

var parentSchema = new Schema({
  children: [childSchema]
})*/

var questionItemSchema = new Schema({
      questionText: { type: String, required: true, unique: false },
      intID: { type: Number, required: true, unique: true },
      questionOrder: { type: Number, required: true, unique: true },
  });

var questionSchema = new Schema({
      category: { type: String, required: true, unique: true },
      intID: { type: Number, required: true, unique: true },
      categoryOrder: { type: Number, required: true, unique: true },
      questions: [questionItemSchema]
  });

var Question = mongoose.model('Question', questionSchema);

module.exports = Question;
