const { body } = require('express-validator');

const { fieldValidation } = require('../../../../middlewares/fieldValidation');

const loginAdminValidators = [
    body('admin_dni').not().isEmpty(),
    body('admin_password').not().isEmpty(),
    fieldValidation
];

module.exports = loginAdminValidators;