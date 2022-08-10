const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/test';

exports.initDatabase = () => mongoose.connect(connectionString);

exports.CORS_OPTIONS = {
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'DELETE', 'PUT', 'OPTIONS', 'HEAD'],
    allowedHeaders: ['Content-Type', 'X-Authorization']
};