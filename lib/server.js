//Thanks to Charles Renwick for his help with the response and getting the correct data type.
'use strict';

var express = require('express');
var http = require('http');
var fs = require('fs');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3000;
var router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/', router);
app.use(express.static(__dirname + '/public'));

router.all('/', function(req, res, next) {
  console.log("request made");
  next();
});

router.post('/:some_name', function (req, res) {
  var fileName = ((req.params.some_name).toString()
);
  var filePath = (__dirname + '/postdata/' + fileName + '.json');
  var recData = JSON.stringify(req.body);
  fs.writeFile(filePath, recData, function(err) {
    if (err) {
     console.log("sorry, no bananas");
    }
  // res.send({msg: 'success'})
  });
  res.send({msg: 'success'})
});

router.get('/:some_name', function (req, res) {
  var getName = ((req.params.some_name).toString());
  var getPath = (__dirname + '/postdata/' + getName + ".json");
  var resData = fs.createReadStream(getPath);

  resData.on('error', function(err) {
    console.log(err);
   res.status(500).send("sorry, we had trouble!");
  });

  resData.on('readable', function() {
     res.writeHead(200, {'Content-Type': 'application/json'});
     resData.pipe(res);
  });
});

console.log('server started on port ' + port);
app.listen(port);


module.exports = app;
