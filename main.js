var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var request = require('request');
var cors = require('cors');
var path = require('path');
app.use(bodyParser.json());
app.use(express.static(__dirname));
var fs = require('fs');

app.use(cors({
	'allowedHeaders': ['sessionId', 'Content-Type'],
	'exposedHeaders': ['sessionId'],
	'origin': '*',
	'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
	'preflightContinue': false
}));

app.get('/', function(req, res) {
	console.log('REQUEST', req.body);
	res.send('Message from server for REDHAT exam....');
})

app.listen(7001);
console.log('Server started on port 7001');
