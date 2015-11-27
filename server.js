var express = require('express');
var bodyParser = require('body-parser');
var _ = require('underscore');
var app =express();
var PORT = process.env.PORT || 5000;
/*var todos =[{
	id:1,
	description:'meeting mom',
	completed:false
},{
	id:2,
	description:'going market',
	completed:false
},{
	id:3,
	description:'party time',
	completed:true
}];*/

var todos =[];

var todoNextId =1;
app.use(bodyParser.json());

app.get('/',function(req,res){
 	res.send('todo api root');
});
//Get /todos
app.get('/todos',function(req,res){
 	res.json(todos);
});

//Get /todos/:id
app.get('/todos/:id',function(req,res){
 	var todoId = parseInt(req.params.id,10);
 	/*var matchedTodo;*/
 	var matchedTodo = _.findWhere(todos,{id:todoId});
 	/*todos.forEach(function(todo){
 		if(todoId === todo.id){
 			matchedTodo = todo;
 		}
 	});*/
 	if(matchedTodo){
 		res.json(matchedTodo);
 	}else{
 			res.status(404).send();
 	}
 	
 });

//Post
app.post('/todos',function(req,res){
	//var body =req.body;
	var body = _.pick(req.body,'description','completed');
	//add id field
	if(!_.isBoolean(body.completed) || !_.isstring(body.description)||body.description.trim().length ===0){
		return res.status(400).send();
	}

	body.description = body.description.trin();
	body.id = todoNextId++;
	//todoNextId++;
	//push body into array
	todos.push(body);
	//console.log('description'+body.description);
	res.json(body);

});

app.listen(PORT,function(){
	console.log("kdhbfhdsb"+PORT);
});