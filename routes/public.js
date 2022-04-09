var express = require('express');
var router = express.Router();
userCtrl = require('../controllers/user')


// Get all posts by all users
router.get('/', userCtrl.public);


module.exports = router;
