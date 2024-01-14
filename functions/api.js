const express = require('express');
const serverless = require('serverless-http')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config();

const scoreRoutes = require('../routes/scores');

const exp = require('constants');

//  ######### Connection mongo #########
const dev_db_url =
    'mongodb+srv://Admin:' + process.env.MONGO_PASSWORD + '@cluster0.ypzya.mongodb.net/memory?retryWrites=true&w=majority';
const mongoDB = process.env.MONGODB_URI || dev_db_url;

mongoose.connect(mongoDB,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

//  ######### END connection mongo #########

const app = express();
const router = express.Router()

if (process.env.NODE_ENV === 'development') {
    console.log('development');
}

if (process.env.NODE_ENV === 'production') {
    console.log('production');
}

router.use(cors())
router.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

router.use(bodyParser.json());

router.get('/api', (req, res, next) => {
    res.send('API')
});

router.use('/scores', scoreRoutes) // import from routes/scores.js

app.use('./netlify/functions/api', router)
module.exports.handler = serverless(app);