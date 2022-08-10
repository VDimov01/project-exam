const router = require('express').Router();
const {Comment} = require('../models/Comment');

router.get('/comments', (req, res) => {
    Comment.find()
        .then((comments) => {
            res.json(comments);
        })
        .catch((err) => {
            res.json(err);
        }
        );
});

router.get('/comments/:id', (req, res) => {
    const id = req.params.id;

    Comment.findById(id)
    .then((comment) => {
        res.json(comment);
    })
    .catch((err) => {
        res.json(err);
    })
});

router.post('/comments', (req, res) => {
    const comment = req.body;

    Comment.create(comment)
    .then((comment) => {
        res.json(comment);
    })
    .catch((err) => {
        res.json(err);
    })
});

module.exports = router;