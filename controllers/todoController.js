const bodyParser = require('body-parser');

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;﻿

mongoose.connect('mongodb://rahul:test123@ds139322.mlab.com:39322/my-todo-db');

mongoose.connection.on('connected', () => {
  console.log('Connected to DB my-todo-db');
});

mongoose.connection.on('error', (err) => {
  console.log('DB Error occured '+ err);
});

let todoSchema = new mongoose.Schema({
    item: String
});

let Todo = mongoose.model('Todo', todoSchema);

// app.use(bodyParser.json());

const urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){
    app.get('/todo', function(req, res){
        Todo.find({}, function(err, data){
            //console.log(data);
            if(err) throw err;
            res.render('todo', {todos: data});
        });
    });

    app.post('/todo', urlencodedParser, function(req, res){
        let newTodo = Todo(req.body).save(function(err, data){
            if(err) throw err;
            res.json(data);
        })
    });

    app.delete('/todo/:id', function(req, res){

        // console.log(req.params.item);

        // Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err, data){

        Todo.find({_id: req.params.id}).remove(function(err, data){
            if(err) throw err;
            res.json(data);
        });
    });
};
