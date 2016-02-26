/**
 * Module dependencies.
*/

var express = require('express')
  , http = require('http')
  , path = require('path')
  , app = express();


process.on('uncaughtException', function (err) {
	 console.log(">> Uncaught exception: "+err);
});

app.all('/*', function(req, res, next) {
  // CORS headers
  res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  
  // Set custom headers for CORS
  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,Access-Control-Allow-Origin,X-Access-Token,X-Key,Authorization');
  
  if (req.method == 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
  
});

app.use('/', require('./routes'));

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('URL Not Found');
    err.status = 404;
    next(err);
});


app.use(function(err, req, res, next) {
    res.send(err);
});

http.createServer(app).listen(3030, function(){
  console.log('Express server listening on port ' + 3030);
});

module.exports = app;
