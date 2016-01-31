var express = require('express');
var app = express();

// Respond with "Hello World" when a GET request is made to the homepage
app.get('/', function(req, res) {
	console.log('GET command received');	
	res.send('Hello World');
});

// Start server
app.listen(3000, function() {
	console.log('Example app listening on port 3000 running');
});
