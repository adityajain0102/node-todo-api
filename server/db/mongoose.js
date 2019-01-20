const mongoose = require('mongoose');

//mongoose provide global promises to access

mongoose.Promise =global.Promise;
//connection to database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports= {mongoose};