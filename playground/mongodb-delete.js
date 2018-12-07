
const {MongoClient, ObjectID} = require('mongodb').MonogClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

    if(err)
    {
        return console.log('unable to connect to mongodb server');
    }
    console.log('Connected to  mongodb server');

    //deleteMany

    db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {

        console.log(result);
    });
    
    //deleteOne

    db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result)=> {

        console.log(result)
    });

    //findOneAndDelete
    db.collection('Todos').findOneAndDelete({
        _id:new ObjectID(" your doc id")
    }).then((results)=> {

        console.log(JSON.stringify(results, undefined, 2));
    });

    db.close();
});