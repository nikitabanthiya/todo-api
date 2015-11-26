var express = require('express');
var app =express();
var PORT = process.env.PORT || 3000;
var todos =[{
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
}];

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
 	var matchedTodo;

 	todos.forEach(function(todo){
 		if(todoId === todo.id){
 			matchedTodo = todo;
 		}
 	});
 	if(matchedTodo){
 		res.json(matchedTodo);
 	}else{
 			res.status(404).send();
 	}
 	//res.status(404).send();
 	//res.json('Asking for to do with id of'+req.params.id);
});


app.listen(PORT,function(){
	console.log("kdhbfhdsb"+PORT);
});