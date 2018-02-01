express = require('express');

var routes = express.Router();
var bodyParser = require('body-parser');
var multer = require('multer');

routes.post('/insertTheQands', function (req, res) {
  console.log("in insertTheQands ")
    res.send('hello, user!')
  })
  module.exports = routes;