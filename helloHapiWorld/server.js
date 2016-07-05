'use strict';

var Path = require('path');
var Hapi = require('hapi');

var server = new Hapi.Server();

server.register(require('inert'), function(err) {
  if(err) {
    throw err;
  }
})

server.connection({
  host: 'localhost',
  port: 8000
});

server.route({
  method: 'GET',
  path: '/hello',
  handler: function(request, response) {
    return response.file('./index.html');
  }
});

server.start(function(err){
  if (err) {
    throw err;
    console.log(err);
  }
  console.log('Server running at: ' , server.info.uri);
});
