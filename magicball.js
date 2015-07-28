var net = require('net');

var port = 3000;
var words = ['most likely', 'very doubtful', 'ask again', 'as i see it, yes', 'my sources say no', 'cannot predict now', 'yes', 'don\'t count on it', 'without a doubt', 'better not tell you'];



var server = net.createServer(function(c){
	console.log("client connected");
	c.write("Hello client\r\n");


	c.on('data', function(data){
		console.log(data.toString().trim())
		
		if (data.toString().trim().split('').pop() != '?'){
			c.write("Is this a question?\nIf so, say with question mark please\n")
		}else{
			c.write(words[Math.floor(Math.random()*words.length)]+'\n')
		}
	});

	c.on('end', function(){
			console.log('client disconnected')	
		})

})

server.listen(port, function(){
	console.log("listen on" + port)
});