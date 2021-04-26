require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('express-jwt');
const jsonwebtoken = require('jsonwebtoken');

const authMiddleware = require('./app/middleware/auth');

const cors = require('cors');
const router = require('./app/routers/router');
const app = express();



app.use(express.json());
app.use(cors('*'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PATCH, UPDATE, DELETE');

    if (req.method === 'OPTIONS') {
    res.sendStatus(200);
    }
    else {
        next();
    }
});



app.use(router);

app.listen(process.env.PORT || 3001, () => {
    console.log('Server running on :', process.env.PORT);
});