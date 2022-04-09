var express = require('express');
var router = express.Router();

userCtrl = require('../controllers/user')


// Homepage for logged in users
router.get('/home', isLoggedIn, userCtrl.index);
router.get('/', isLoggedIn, userCtrl.index);
router.get('/profile', isLoggedIn, userCtrl.index);

// Get all posts by signed in user
router.get('/posts', isLoggedIn, userCtrl.userPosts);

// Add a post
router.post('/posts', isLoggedIn, userCtrl.addPost);

// Delete a post
router.delete('/posts/:id', isLoggedIn, userCtrl.deletePost)

// View a single post (problem with ejs/mongoose)
router.get('/:userId/posts/:id', isLoggedIn, userCtrl.viewPost);

// Update/edit a single post
router.put('/posts/:id', isLoggedIn, userCtrl.editPost)

// Insert this middleware for routes that require a logged in user
function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}


module.exports = router;