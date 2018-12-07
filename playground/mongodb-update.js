
const {MongoClient, ObjectID} = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=> {

if(err)
{
    console.log(err)
}
console.log('Connected to Mongodb');

//findOneAndUpdate 

db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID(' Your doc id')
}, {
    $set: {
completed: true
    }
}, {
    returnOriginal: false
}).then((result)=> {

    console.log(result);
});

//findOneAndUpdate in Users collection

db.collection('Users').findOneAndUpdate({

    _id: new ObjectID(' Your Doc id')
}, {
    $set: {
        name: 'Aditya'
    }
}, {
    $inc: {
        age: 1
    }
}, {
    returnOriginal: false
}).then((result)=> {

    console.log(result);
})
});