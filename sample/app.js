
var express = require('express');
var swig = require('swig');
var path = require('path');
var index = require('./routes/index');

var app = express();
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, '/views'));
swig.setDefaults({cache: false});
app.use(express.static('static'));

app.use('/index', index);

var server = app.listen(9000, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('http://%s:%s', host, port);
});