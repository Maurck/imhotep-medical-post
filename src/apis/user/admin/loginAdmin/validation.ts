import { body } from "express-validator";
import { fieldValidation } from "../../../../middlewares/fieldValidation";

class LoginAdminValidation {

    createAdminValidators = [
        body('admin_dni').not().isEmpty(),
        body('admin_password').not().isEmpty(),
        fieldValidation
    ]

}

const createAdmin = new LoginAdminValidation();

export default createAdmin.createAdminValidators;