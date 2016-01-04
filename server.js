// require express
var express = require("express");
// require body-parser
var bodyParser = require('body-parser');

// path module -- try to figure out where and why we use this
var path = require("path");

// create the express app
var app = express();

// static content 
app.use(express.static(path.join(__dirname, "./static")));

// use it!
app.use(bodyParser.urlencoded());


// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// root route to render the index.ejs view
app.get('/', function(req, res) {
 res.render("index");
})

// tell the express app to listen on port 8000
var server = app.listen(8000, function() {
 console.log("listening on port 8000");

});

var io = require('socket.io').listen(server) 
var count = 0;
io.sockets.on('connection', function (socket) {




socket.on("button_clicked", function (data){
	console.log("This is getting to the server");
	count++;
	console.log(count);

socket.emit('counter', {response: count});


socket.on("reset", function (data){
	count = 0;

});
});

});
  



