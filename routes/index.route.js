const indexController = require('../controllers/index.controller');
<<<<<<< HEAD
const signInController = require('../controllers/signin.controller');
const signUpController = require('../controllers/signup.controller');
const articlesController = require('../controllers/articles.controller');
=======
<<<<<<< HEAD
// const postController = require('../controllers/post.controller');
=======
>>>>>>> dafcc98bf8c4abd809948321ddd1f951cbd6e255
>>>>>>> 26435beeb4490760f3b29d3c407da1953fbf97fe

const auth = require('../middlewares/auth');

const router = require('express').Router();

router.get('/', indexController.index);
router.get('/articles', articlesController.index);
router.get('/signin', signInController.index);
router.get('/signup', signUpController.index);

module.exports = router;
