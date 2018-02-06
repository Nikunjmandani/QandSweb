express = require('express');

var routes = express.Router();
var bodyParser = require('body-parser');
var multer = require('multer');

//Routes here
/*
router.get('/', function (req, res) {
	var nodeSession = req.session;
	if (!nodeSession.email) {
		res.send(401, 'Unauthorized request.');
	} else {
		res.send(500, 'Incorrect url requested.');
	}
});
*/
// insert the question and answer
routes.post('/insertTheQands', function (req, res) {
	console.log("in insertTheQands ");
	//console.log('s:'+quands);
	var QANDS = require('../models/qandsadd');
	var newQANDS = QANDS({
		question: req.body.question,
		answers: req.body.answer
	});
	newQANDS.save(function (err, quandss) {
		if (err) {
			res.status(500).send('{"quands":{}}');
			throw err;
		}
		console.log("questions and answer added succesfully")
		res.status(200).send({ "quands": quandss });
	});
});

//get the question and answer
routes.post('/getTheQands', function (req, res) {
	console.log("in getTheQands ");
	//console.log('s:'+quands);
	var QANDS = require('../models/qandsadd');

	QANDS.find({}, function (err, quandss) {
		if (err) {
			res.status(500).send('{"quands":{}}');
			throw err;
		}
		console.log("questions and answer Get succesfully")
		res.status(200).send({ "quands": quandss });
	});
});

//delete the question and answer
routes.post('/deleteTheQands', function (req, res) {
	console.log("in deleteTheQands ");
	var question= req.body.question;
	//console.log('s:'+quands);
	var QANDS = require('../models/qandsadd');

	QANDS.findOneAndRemove({"question":question}, function (err, quandss) {
		if (err) {
			res.status(500).send('{"quands":{}}');
			throw err;
		}
		console.log("questions and answer deleted succesfully")
		res.status(200).send({ "quands": quandss });
	});
});

module.exports = routes;