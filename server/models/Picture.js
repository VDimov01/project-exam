const mongoose = require('mongoose');

const pictureSchema = new mongoose.Schema({
    title: {
        type: String,
        required:true
    },
    description: {
        type: String,
        required:true
    },
    imageUrl: {
        type: String,
        required:true
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
});

const Picture = mongoose.model('Picture', pictureSchema);

exports.Picture = Picture;

