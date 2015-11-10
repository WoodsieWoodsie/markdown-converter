'use strict';

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var marked = require('marked');


var app = express();

app.set('view engine', 'jade');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.render('index');
});

app.post('/markdown', function(req, res) {
  var markdown = req.body.markdown;
   var html = marked(req.body.markdown);
   res.send(html);
});


app.listen(3000);