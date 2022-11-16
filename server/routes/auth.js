var express = require('express');
var router = express.Router();
const { createUser, getUser } = require('../controllers/auth/AuthCtrl')

/* GET users listing. */
router.get('/', getUser)

router.post('/', createUser)

module.exports = router;
