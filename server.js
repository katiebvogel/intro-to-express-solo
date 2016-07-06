var express = require('express');
var app = express();
var port = 3000;

var publicRouter = require('./public.js');

app.listen(port, function(request, response){
  console.log('We are listening on port 3000');
});

app.use('/', publicRouter);
