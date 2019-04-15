var express = require('express');
var bodyParser = require("body-parser");
var methodOverride = require('method-override')

var r=require( './route/Route.js').route
var cors = require("cors");


var app = express();

app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method
    delete req.body._method
    return method
  }
}))



app.use(cors());

r(app)
app.listen(8080);
