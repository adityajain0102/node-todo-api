// const MongoClient = require('mongodb').MongoClient;
// to use ES6 feature we declare MongoClient like this

const {MongoClient, ObjectID} = require('mongodb');
 
//ES6 feature object de structuring
// var user = {
//     name: 'Aditya',
//     age: 25
// }
// var {name} = user;
// console.log(name);

//Es6 example end

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

if(err)
    {
      return console.log('unable to connect to Mongodb server')
    }
 
console.log('Connected to Mongodb server');

// ============================ INSERT ONE DOC INTO MONGODB ==================================
// db.collection('Todos').insertOne({
//     text: 'something good is happening to you',
//     completed: false
// }, (err, result) => {
//    if(err)
//    {
//     return console.log('unable to insert todo', err);
//    }
//    console.log(JSON.stringify(result.ops, undefined, 2));
    
//  });


// ============================= Finding document using ObjectID =================================

db.collection('Todos').find({
_id: new ObjectID('id of the object')

}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
}, (err) => {
    console.log('unable to fetch todos', err);
});

// By using the count we can count no of docs in Todos collection
db.collection('Todos').find().count().then((count) => {
console.log('Todos count:', count);
}, (err) => {
    console.log('unable to fetch todos', err)
});


// finfing name with same valu docs
db.collection('Todos').find({name: 'Aditya'}).count().then((docs) => {
    console.log(JSON.stringify(docs, undefined , 2));
    }, (err) => {
        console.log('unable to fetch todos', err)
    });
db.close();
});