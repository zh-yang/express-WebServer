var express = require('express')
var path = require('path')

var app = express()

app.use(express.static(path.join(__dirname,'lib')))

var server = app.listen(3000,'127.0.0.1',function(){
	var host = server.address().address
	var port = server.address().port
	console.log('Listening at http://%s:%s',host,port)
})

app.get('/weather',function(req,res){
	res.send('杭州：多云')
})