const express = require('express');
const cors = require('cors');
const { login, signup }  = require('./controllers/loginController');
const { loadPlayerHome }  = require('./controllers/homeController');
const { enqueGame }  = require('./controllers/gameController');

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use(cors());

app.post('/api/login', login);

app.post('/api/signup', signup);

app.get('/api/home', loadPlayerHome);

app.get('/api/play', enqueGame);

app.listen(4000, () => {console.log("Listening on port 4000...");});