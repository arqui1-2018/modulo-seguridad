var express require('express');
var app = express();
var http = require('http');

http.createServer(function (req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Modulo de seguridad interna corriendo...');
    
}).listen(process.env.PORT || 8080);