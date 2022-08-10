const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();
const { initDatabase, CORS_OPTIONS} = require('./initDB.js');

app.use(cors(CORS_OPTIONS));

app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(cookieParser());

app.use(routes);

initDatabase()
.then(() => {
    app.listen(5000, () => console.log('App is listening on port 5000...'));
    console.log('Database connected!');
})
.catch((err) => {
    console.log('Cannot connect to DB!',err);
})