const { client, connect, close } = require('../db/driver.js');

const dbname = "UserInfo"
const collection_name = "users"
const usersCollection = client.db(dbname).collection(collection_name)

// placeholders for now
const login = async (req, res) => {
    const data = req.body;
    const user = {username: data.username, password: data.password};
    let result = await getUsers(user)
    res.json(result);
}

const signup = async (req, res) => {
    const data = req.body;
    console.log(data); // Not needed later on
    const user = {username: data.username, password: data.password};
    let result = await addUser(user);
    console.log("SUCCESS: ", result);
    res.json({'success': result});
}

async function getUsers(user) {
    try {
        await connect();
        console.log(user);
        const foundUser = await usersCollection.findOne(user,)
        console.log(foundUser)
        await close();
        return foundUser
    } catch {
        await close();
        return null;
    }
}

async function addUser(user) {
    let value;
    try {
        await connect();
        const result = await usersCollection.insertOne(user);
        console.log('One user added');
        value = true;
    } 
    catch (error) {
        console.log('Error: ', error);
        value = false;
    }
    finally {
        await close();
        return value;
    }
}

module.exports = {
    login,
    signup
}