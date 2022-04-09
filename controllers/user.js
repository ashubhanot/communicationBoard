const User = require("../models/users")


//render profile page
function index(req, res, next){
    res.render('user/index', {
        user: req.user,
    });
};

//render posts by user
function userPosts(req, res, next){
    User.findById(req.user._id, function(err, user) {
        res.render('posts/user', {user})
    });
};
    

//render all public posts
function public(req, res, next){
    User.find({}, function(err, user){
        res.render('posts/all', {user})
    })
 };
 
//add a post
function addPost(req, res) {
    User.findById(req.user._id, function(err, user) {
        user.posts.push(req.body);
        user.save(function(err) {
        res.redirect('back');

        });
    });
    }


//edit a post
function editPost(req, res){
    User.findById(req.user._id, function(err, user){
        user.posts.id(req.params.id).userPost = req.body.userPost
        user.save()
        res.render('posts/user', {user})
    })
};



//delete a post
function deletePost(req, res){
    User.findById(req.user._id, function(err, user) {
        user.posts.id(req.params.id).remove();
        user.save()
        res.redirect('back');

})
}

//view a post
function viewPost(req, res, next){
    User.findById(req.params.userId, function(err, user){
        const post = user.posts.id(req.params.id)
        res.render('posts/id', {user, post})
    })
        };


    module.exports = {
        index,
        addPost,
        public,
        userPosts,
        deletePost,
        viewPost,
        editPost
    }
