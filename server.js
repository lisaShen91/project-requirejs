var express = require('express'),
	cors = require('cors'),
	cookieParser = require('cookie-parser'),
	router = require('./router/index'),
	path = require('path'),
	app = express(),
	Base64 = require('js-base64').Base64,
	babel = require('babel-core'),
	port = 3000;
console.log('aksk:', Base64.encode('{rds}:{d336b1c40a6c3ab7bd328574af4ec5be}'));


var morgan = require('morgan'),
	uuid = require('node-uuid');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, './views'));

morgan.token('id', function getId (req) {
	return req.id;
});
app.use(assginedId);
app.use(morgan(':id :method :url :response-time'));
app.use(express.json({
	limit: '1000kb'
}));
app.use(express.urlencoded({
	extended: false
}));

// app.use('/static', express.static('static'));
app.use('/static', function(req, res, next) {
	var filename = req.originalUrl;
	console.log(path.join(__dirname, filename));

	babel.transformFile(path.join(__dirname, filename), {
		presets: ['es2015']
	}, function(err, result) {
		if (err) {
			console.log(err);
		} else {
			console.log(result.code);
			res.set('Content-Type', 'application/javascript').end(result.code);
		}
	});
});
app.use('/node_modules', express.static('node_modules'));

app.use(router);
app.use(cookieParser());
app.use(cors());
app.listen(port, function() {
	console.log('app is listening ' + port);
});

function assginedId(req, res, next) {
	req.id = uuid.v4();
	next();
}