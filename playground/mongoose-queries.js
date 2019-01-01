
const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');

const {Todo} = require('./../server/models/todo');

var id = '5c2399a936c9b909b087cfb8'

if(!ObjectID.isValid(id)){
    console.log('ID is not valid');
}
Todo.find({
    _id: id
}).then((todos) => {
console.log('Todos', todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
console.log('todo by find one first doc', todo);
}).catch((e) => {
    console.log(e);
});

Todo.findById(id).then((todo) => {
console.log('Todo by id', todo)
}).catch((err) => {
console.log(err);
});