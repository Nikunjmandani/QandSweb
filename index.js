var express =  require('express');
var multer = require('multer');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var compression = require('compression');
var routes = require('./routes/routes')
var app = express();
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
//allowes cross origin browser request
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTION, DELETE, GET");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true);
    next();
});



var router = express.Router()

/*router.post('/insertTheQands', function (req, res) {
  console.log("hello hi");
    res.send('hello');
    res :true;
  })
  router.get('/',(req,res) => {
    res.send("GET");
});

//POST HTTP method to /

router.post('/', (req,res,next) => {
    res.send("POST");

});
app.post('/insertTheQands', function(req, res){
  res.send('Things');
});

module.exports = router;*/
app.use('/',routes)
var dbURI="mongodb://localhost:27017/Ivory";
//put url db url
mongoose.connect(dbURI , {useMongoClient: true });
mongoose.Promise = global.Promise;

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function () {  
    console.log('Mongoose default connection open to ' + dbURI);
  }); 
  
  // If the connection throws an error
  mongoose.connection.on('error',function (err) {  
    console.log('Mongoose default connection error: ' + err);
  }); 
  
  // When the connection is disconnected
  mongoose.connection.on('disconnected', function () {  
    console.log('Mongoose default connection disconnected'); 
  });
  
  // If the Node process ends, close the Mongoose connection 
  process.on('SIGINT', function() {  
    mongoose.connection.close(function () { 
      console.log('Mongoose default connection disconnected through app termination'); 
      process.exit(0); 
    }); 
  }); 
  mongoose.set('debug',true);
var port=3001;
app.listen(port,function(){
    console.log("server is listening on port :"+port);
});