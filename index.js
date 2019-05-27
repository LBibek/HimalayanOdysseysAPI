var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
var path = require('path');
var routes = require('./server/routes/route');
app.set('view engine', 'ejs');
app.set('views', __dirname+'/views');
app.use(express.static(path.join(__dirname + '/public')));
app.use('/', routes);

app.listen(3000, function(err){
    console.log('listening 3000');
});