var restify = require('restify');

function respond(req, res, next) {
  res.send('alive');
  next();
}

function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}

var server = restify.createServer();
server.get('/healthcheck', respond);
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.listen(3000, function() {
  console.log('%s listening at %s', server.name, server.url);
});

// Force release check
