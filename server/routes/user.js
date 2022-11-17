var express = require('express');
var router = express.Router();
const { createUser, getUser, updateUser, getUserId } = require('../controllers/users/userCtrl')

/* GET users listing. */
router.get('/', getUser)

// Login.
router.post('/', createUser)

router.patch('/', createUser)
module.exports = router;
