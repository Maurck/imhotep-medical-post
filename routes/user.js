const {
    Router
} = require('express')

//Register admin user
const createAdminFlow = require('../apis/user/admin/createAdmin/flow');
const createAdminValidator = require('../apis/user/admin/createAdmin/validation');

//Login admin user
const loginAdminFlow = require('../apis/user/admin/loginAdmin/flow');
const loginAdminValidator = require('../apis/user/admin/loginAdmin/validation');

const router = Router();

router.post('/admin', createAdminValidator, createAdminFlow);
router.post('/admin/login', loginAdminValidator, loginAdminFlow);

module.exports = router;