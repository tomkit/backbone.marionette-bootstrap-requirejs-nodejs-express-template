var http = require('http');
var express = require('express');
var _ = require('underscore');
var app = express();
var cons = require('consolidate');

app.set('views', __dirname + '/views');
app.engine('html', cons.underscore);
app.set('view engine', 'underscore');

app.use(express.static(__dirname + '/public')); 
app.use(app.router);
app.get('/', function(req, res, next) {
    res.render('layout.html');
});
app.listen(9000);

process.on('uncaughtException', function(e) {
    console.log('Uncaught exception:' + e);
});