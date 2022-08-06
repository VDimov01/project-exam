const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/test';

exports.initDatabase = () => mongoose.connect(connectionString);

