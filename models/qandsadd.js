// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var quandsSchema = new Schema({
 // stud_id: { type: String, required: true},
 // school_id: { type: String, required: true },
 question :{ type: String, required: true},
//  question_date: Date,
  answers: { type: String, required: true},
 // question_date:Date
//  stud_mname:String,
 // stud_class:String,
 // stud_section:String,
 // stud_address:String
  
});

// the schema is useless so far
// we need to create a model using it
var QANDS = mongoose.model('quands', quandsSchema);

// make this available to our users in our Node applications
module.exports = QANDS;