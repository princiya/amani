var express = require('express') //express is a Node.js web application framework
  , https = require('https') //for serving files over secure https (getusermedia doesn't run on http)
  , path = require('path') //for handling and transforming file paths
  , fs = require('fs') //for file I/O using standard POSIX functions
  , app = express();

var options = {
    key: fs.readFileSync('ssl/server.key'),
    cert: fs.readFileSync('ssl/server.crt'),
    requestCert: false,
    rejectUnauthorized: false
};

process.on('uncaughtException', function (err) {
	 console.log(">> Uncaught exception: "+err);
});

app.use(express.static(path.join(__dirname, 'public'))); //we need to serve static files from the public directory

https.createServer(options, app).listen(4000, function(){
  console.log('Express https server listening on port ' + 4000);
});

module.exports = app;
