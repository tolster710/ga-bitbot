var net = require('net');
var serverURL='bitcoincharts.com:27007';
var count=0;
var client = net.connect({host: 'bitcoincharts.com', port: 27007},
	function() { console.log('Client connected');
	});
client.on('data', function(data) {
	count++;
	console.log(data.length);
	var inbuffer = data.toString().split("\n");
	console.log(inbuffer.length);
	var sub_count=0;
	for (var i=0; i<inbuffer.length-1; i++)
	{
		sub_count++;
		console.log("message "+count.toString()+"   Sub: "+sub_count.toString());
		console.log(inbuffer[i].toString());
	}
	});
client.on('end', function() {
	console.log("client discinnected");
	});

