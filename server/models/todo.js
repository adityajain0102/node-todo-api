
var mongoose = require('mongoose');

//Now creating model to the Todos collection
//model takes two arguments 1) collection name 2)model attributes
var Todo = mongoose.model('Todo', {

    text: {
        type: String,
        required: true,
        minlength: 5,
        trim: true,
        default:'Someting'
    },

    completed: {

        type: Boolean,
        default:false
    },

    completedAt: {

        type: Number,
        default:  0
    }

});

module.exports = {Todo};