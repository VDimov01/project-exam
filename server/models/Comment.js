const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
});

const Comment = mongoose.model('Comment', commentSchema);

exports.Comment = Comment;