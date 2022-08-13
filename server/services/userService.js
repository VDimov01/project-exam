const jwt = require('jsonwebtoken');
const secret = 'secret';


exports.createToken = (user) => {
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

}