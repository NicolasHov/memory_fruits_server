// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const cors = require('cors')
// require('dotenv').config();

// const scoreRoutes = require('./routes/scores');
// const dev_db_url =
//     'mongodb+srv://Admin:' + process.env.MONGO_PASSWORD + '@cluster0.ypzya.mongodb.net/memory?retryWrites=true&w=majority';
// const mongoDB = process.env.MONGODB_URI || dev_db_url;

// mongoose.connect(mongoDB,
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     })
//     .then(() => console.log('Connexion à MongoDB réussie !'))
//     .catch(() => console.log('Connexion à MongoDB échouée !'));

// const app = express();

// if (process.env.NODE_ENV === 'development') {
//     console.log('development');
// }

// if (process.env.NODE_ENV === 'production') {
//     console.log('production');
// }
// app.use(cors())
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
//     next();
// });

// app.use(bodyParser.json());

// app.use('/api/scores', scoreRoutes)

// module.exports = app;