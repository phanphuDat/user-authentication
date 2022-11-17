var router = require('express').Router();
const passport = require("passport");
var { authenticate, getUser } = require('../controllers/auth/authCtrl')

router.post('/', authenticate)

router.get('/', passport.authenticate('jwt', { session: false }), getUser)

module.exports = router;