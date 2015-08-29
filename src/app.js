'use strict';

var express = require('express'),
	  posts = require('./posts.json');

			         

var app = express();



app.get('/', function(req, res){
	res.send("hello world")
});
app.get('/blog', function(req,res){
// 	res.send("this is the main blog page")

 });
app.get('/blog/ :new', function(req,res){
	res.send('this is the new posts page');
})

app.get('/blog/:title',function(req, res){
	debugger
	var title = req.params.title;
	if(title === undefined){
		res.status(503);
		res.send("this is under construction")
	} else{
	
	var post = posts[title];
	res.send(posts);
};

});




app.listen(3000, function() {
	console.log("The frontend server is running on port 3000!");
});
