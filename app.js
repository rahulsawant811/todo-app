const express = require('express');
const path = require('path');
const todoController = require('./controllers/todoController');

let app = express();

app.set('view engine', 'ejs');

// app.use(express.static('./public'));

app.use(express.static(path.join(__dirname, 'public')));


todoController(app);

app.listen(3000);
console.log('Listening to port: 3000');
