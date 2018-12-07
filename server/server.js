const mongoose = require('mongoose');

//mongoose provide global promises to access

mongoose.Promise =global.Promise;
//connection to database
mongoose.connect('mongodb://localhost:27017/TodoApp');


//Now creating model to the Todos collection
//model takes two arguments 1) collection name 2)model attributes
var Todo = mongoose.model('Todo', {

    text: {

        type: String
    },

    completed: {

        type: Boolean
    },

    completedAt: {

        type: Number
    }

});

//passing value to the collection Todo

var newTodo = new Todo({
    text: 'Cook Dinner'
});

//now saving 
newTodo.save().then((doc) => {
    console.log(doc);
}, (e) => {
    console.log('Unable to save todo')
});
