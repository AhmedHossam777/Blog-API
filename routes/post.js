const express = require('express');
const isLogin = require('../middlewares/isLogin');
const isSuspended = require('../middlewares/isSuspended');
const isBlocked = require('../middlewares/isBlocked');
const hidePosts = require('../middlewares/hidePosts');

const {
  createPost,
  getPostsOfFollowedUsers,
  getPost,
  getFeed,
  likePost,
} = require('../controllers/post');

const router = express.Router();

router
  .route('/')
  .get(isLogin, isSuspended, getFeed)
  .post(isLogin, isSuspended, createPost);

router
  .route('/posts-of-following-user')
  .get(isLogin, isSuspended, getPostsOfFollowedUsers);

router.route('/:id').get(isLogin, isSuspended, hidePosts, getPost);

router.route('/like-post/:id').post(isLogin, isSuspended, hidePosts, likePost);

module.exports = router;
