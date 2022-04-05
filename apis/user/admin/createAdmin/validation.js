const { body } = require('express-validator');

const { fieldValidation } = require('../../../../middlewares/fieldValidation');

const {
    uniqueAdminDNI
} = require('../../../../middlewares/databaseValidators');

const createAdminValidators = [
    body('admin_dni').not().isEmpty(),
    body('admin_dni').isNumeric().trim(),
    body('admin_dni', 'El DNI debe contener 8 caracteres').isLength({ min: 8, max: 8 }),
    body('admin_dni').custom(uniqueAdminDNI),
    body('admin_password').not().isEmpty(),
    fieldValidation
];

module.exports = createAdminValidators;