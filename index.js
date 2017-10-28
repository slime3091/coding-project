var http = require('http');
var port = process.env.port || 1337;
var express = require('express');
var path = require('path');
var app = express();
app.use(express.static(__dirname + '/public'));

