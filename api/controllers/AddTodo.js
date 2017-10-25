'use strict';

var client = require('../helpers/es');

module.exports = {
    AddTodo: AddTodo
};

//write data to elasticsearch with AddTodo function
//1: take request from client and send to node
function AddTodo(req, res){
    client.create({
        index: 'todo',
        type: 'todo',
        id: req.swagger.params.todo.value.todo_id,
        body: req.swagger.params.todo.value
        //2. take response from elasticsearch and send to node
    }, function(error,response){
        res.header('Content-Type', 'application/json');
        if(error){
            console.log(error);
            res.statusCode = 409;
            res.end(JSON.stringify(error));
        }else{
            req.swagger.params.todo.value.datecreated = new Date();
            console.log(`Todo ${req.swagger.params.todo.value.todo_id} added to Elasticsearch`);
            res.end();
        }
    });
}