
// placeholders for now
const login = async (req, res) => {
    const data = req.body;
    console.log(data); 
    res.json({ message: 'Logged in Successfully' });
}

const signup = async (req, res) => {
    res.json({msg: "hello plz sign in"});
}

module.exports = {
    login,
    signup
}