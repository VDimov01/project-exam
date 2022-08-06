const router = require('express').Router();
const {User} = require('../models/User');

router.get('/users', (req, res) => {
    User.find()
        .then((users) => {
            res.json(users);
        })
        .catch((err) => {
            res.json(err);
        }
        );
});

router.get('/users/:id', (req, res) => {
    const id = req.params.id;
    User.findById(id)
    .then((user) => {
        res.json(user);
    })
    .catch((err) => {
        res.json(err);
    })
})

router.post('/users/register', async (req, res) => {
    const user = req.body;

    User.create(user)
    .then((user) => {
        res.json(user);
    })
    .catch((err) => {
        res.json(err);
    })

})

module.exports = router;