const { MongoClient } = require('mongodb')
const uri = require('./atlas_uri.js')

console.log(uri)

const client = new MongoClient(uri)
const dbname = "bank"

const connect = async () => {
    try {
        console.log("HI4");
        await client.connect();
        console.log('Connected to the %s database', dbname);
    } catch (error) {
        console.error('Error connecting to the database error: %s', error);
    }
};

async function close() {
    await client.close();
    console.log('Connection to the database is closed');
}

module.exports = {client, connect, close} 

// const main = async() => {
//     try {
//         await connectToDatabase();
//         const dbs = await client.db().admin().listDatabases();
//         console.table(dbs.databases)
//     } catch (err) {
//         console.error('Error connecting to the databse: %s', err);
//     } finally
//     {
//         await client.close();
//     }
// };