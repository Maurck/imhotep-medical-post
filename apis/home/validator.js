// const { query } = require('express-validator');

// const { authToken } = require('../../../middlewares/authToken');
// const { userNotExists } = require('../../../middlewares/databaseValidators');
// const { fieldValidation } = require('../../../middlewares/fieldValidation');

const homeValidators = [
    // authToken,
    // query('user_id').isMongoId(),
    // query('user_id').custom(userNotExists),
    // query('subscribe').optional().isBoolean(),
    // query('subscribing').optional().isBoolean(),
    // fieldValidation
];

module.exports = homeValidators;