const MongoClient = require('mongodb').MongoClient;
const uri = process.env.MONGOURL;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
    if (err) {
        console.error(err);
        return;
    }
    global.db = client.db();
    global.coll = db.collection('ashar');

    console.log("mongo connected");
});
