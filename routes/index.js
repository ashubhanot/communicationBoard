var express = require('express');
var router = express.Router();
const passport = require('passport');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'homepage' });
});

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/user/profile',
    failureRedirect : '/' // maybe do /loginfailed
  }
));

// Logout route - added redirect page to logout from Google to ensure proper end of session
router.get('/logout', function(req, res) {
  req.session.destroy(function(e){
      req.logout();
      res.redirect('https://mail.google.com/mail/u/0/?logout&hl=en');

  });
});


module.exports = router;
