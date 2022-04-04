const {
    Router
} = require('express')

//CreateUser Flow and Validators
const homeFlow = require('../apis/home/flow');
const homeValidator = require('../apis/home/validator');

const router = Router();

router.get('/', homeValidator, homeFlow);

module.exports = router;