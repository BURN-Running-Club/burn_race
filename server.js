var express = require('express'),
	app = express(),
	path = require('path'),
	bodyParser = require('body-parser'),
	morgan = require('morgan'),
	mongoose = require('mongoose'),
	config = require('./config'),
	api = require('./client/routes/api'),
	routes = require('./client/routes');

/* Server side */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.set('view engine', 'ejs');
app.engine('.html', require('ejs').renderFile);

// Handle CROS 
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});

// Mongo database
mongoose.connect(config.database);

/* UI */
app.set('views', __dirname + '/client');
app.set('view engine', 'ejs');

// JSON API
app.get('/api/name', api.name);

// Static files
app.use(express.static(path.join(__dirname, '/client')));

// Index and view partials
app.get('/', routes.index);
app.get('/component/:component', routes.components);
app.get('/test', routes.test); 


/* Start server */
app.listen(config.port);
console.log('Burn race server started on port ' + config.port);
