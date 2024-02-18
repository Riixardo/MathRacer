const { client, connect, close } = require('../db/driver.js');

const dbname = "UserInfo"
const collection_name = "users"
const usersCollection = client.db(dbname).collection(collection_name)

// placeholders for now
const login = async (req, res) => {
    const data = req.body;
    console.log(data); 
    const user = {username: data.username, password: data.password};
    let result = await getUsers(user)
    res.json(result);
}

const signup = async (req, res) => {
    res.json({msg: "hello plz sign in"});
    const data = req.body;
    console.log(data); // Not needed later on
    const user = {username: data.username, password: data.password};
    let result = await addUser(user);
    res.json(result);
}

async function getUsers(user) {
    try {
        await connect();
        const users = await usersCollection.db(dbname).collection(collection_name).find(user)
        console.log(users);
    } finally {
        await close();
    }
}

async function addUser(user) {
    try {
        await connect();
        const result = await usersCollection.insertOne(user);
        console.log('One user added');
    } finally {
        await close();
    }
}

module.exports = {
    login,
    signup
}