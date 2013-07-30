//server
var io = require('socket.io').listen(app);
var app = require('http').createServer(mainfunction);
var fs = require('fs');
app.listen(8000);

function mainfunction (req,res){
	fs.readFile(__dirname + '/index.html',
		function (err,data){
			res.writeHead(200);
			res.end();
		
		});
};

io.sockets.on('connection', function (socket){
	socket.emit('response',{response:true})
});
