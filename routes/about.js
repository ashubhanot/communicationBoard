var express = require('express');
var router = express.Router();


/* GET about page */
router.get('/', function(req, res, next) {
  res.send('This app is made for employees to communicate.');
});


module.exports = router;