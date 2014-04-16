/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var exphbs = require('express3-handlebars');

var app = express();

// all environments
app.engine('handlebars', exphbs({defaultLayout: 'main'}));

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded());
app.use(express.logger('dev'));
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);

app.get('/render', function(request, response){
    console.log(request.param('url'));
    console.log(request.param('file'));
    response.send(request.param('url'));
});

app.post('/', function(request, response){
  console.log(request.body);      // your JSON
  response.send(request.body);    // echo the result back
});


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
