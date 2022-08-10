const jwt = require('jsonwebtoken');
const secret = 'secret';


exports.createToken = (user) => {
    //Asyncrhonous function to generate a token
    const payload = {_id: user._id, email: user.email};

            const promise = new Promise((resolve, reject) => {
                jwt.sign(payload, secret, {expiresIn: '1d'}, (err, decodedToken) => {
                    if(err){
                        return reject(err);
                    }

                    resolve(decodedToken);
                })
            });

            return promise;

            //Synchronous function to generate a token
            // const token = jwt.sign({username: user.username, _id: userExists._id, name: userExists.name}, secret, {expiresIn: '1h'});
            // res.cookie(sessionName, token, {httpOnly: true});
            // res.redirect('/');
}