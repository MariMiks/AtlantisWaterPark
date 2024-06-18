var express = require('express');

var app = module.exports = express()

app.get('/', function(req, res){
  res.send('Hello World');
});


if (!module.parent) {
  app.listen(5000);
  console.log('Express started on port 5000');
}