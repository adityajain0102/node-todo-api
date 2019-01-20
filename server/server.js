require('./config/config');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

const port = process.env.PORT || 3000;




app.use(bodyParser.json());

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');




app.post('/todos', (req, res) => {
console.log(req.body);

var todo = new Todo({
    text: req.body.text
});

todo.save().then((doc) => {
res.send(doc);
}, (e) => {
    res.status(400).send(e);
});
});

app.get('/todos', (req, res)=> {

    Todo.find().then((todos)=> {
res.status(200).send({todos});
console.log(todos);
console.log(todos.length);
    }, (e) => {
res.status(400).send(e);
    })
});
app.listen(port, () => {
    console.log('Server listening on ', + port);
});

module.exports = {app};
//passing value to the collection Todo

// var newTodo = new Todo({
//     text: ' Edit this video '
// });

//now saving 
// newTodo.save().then((doc) => {
//     console.log(doc);
// }, (e) => {
//     console.log('Unable to save todo', e)
// });


// new user model to check email



// var user = new User({
//     email: 'adityavardhan.nagamalli@blackcactusglobal.in',
//     name: 'Aditya'
// });

// user.save().then((result)=> {

//     console.log('User saved', result);

// }, (err) => {
// console.log('Unable to save user', err);
// });



