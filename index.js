var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var router = require('./routes/BaseRouter');

var app = express();
var portNo = 3002;

//set view engine   
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//set static folder
app.use(express.static(path.join(__dirname, 'client')));

//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

//set routes
app.use('/', router);

app.listen(portNo, function () {
    console.log('Port : ' + portNo);
});
