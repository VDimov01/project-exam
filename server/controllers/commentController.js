const router = require('express').Router();
const {Comment} = require('../models/Comment');
const {header, validationResult} = require('express-validator');

router.get('/', (req, res) => {
    Comment.find()
        .then((comments) => {
            res.json(comments);
        })
        .catch((err) => {
            res.json(err);
        }
        );
});

router.get('/details/:id', (req, res) => {
    const id = req.params.id;

    Comment.findById(id)
    .then((comment) => {
        res.json(comment);
    })
    .catch((err) => {
        res.json(err);
    })
});

router.delete('/details/:id', 
(req, res) => {
    const id = req.params.id;

    Comment.findByIdAndRemove(id)
    .then((comment) => {
        res.json(comment);
    })
    .catch((err) => {
        res.json(err);
    })
})

router.put('/details/:id', 
(req, res) => {
    const id = req.params.id;
    const comment = req.body;

    Comment.findByIdAndUpdate(id, comment)
    .then((comment) => {
        res.json(comment);
    })
    .catch((err) => {
        res.json(err);
    })
})

router.post('/', 
(req, res) => {
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