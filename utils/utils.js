const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const encryptPassword = password => {
    const salt = bcryptjs.genSaltSync();
    return bcryptjs.hashSync(password, salt);
}

const generateJWT = (id, type) => {
    return new Promise((resolve, reject) => {
        const payload = { id , type };
        jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: process.env.EXPIRATION_DATE
        }, (err, token) => {
            if (err) {
                reject(err);
            } else {
                resolve(token);
            }
        });
    });
}

const getLoggedUser=async (req, res) => {
    return req.user;
}

module.exports = {
    encryptPassword,
    generateJWT,
    getLoggedUser
};