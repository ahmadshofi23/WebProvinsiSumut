const indexController = require('../controllers/index.controller');
const signInController = require('../controllers/signin.controller');
const signUpController = require('../controllers/signup.controller');
const articlesController = require('../controllers/articles.controller');
const listcitiesController = require('../controllers/listcities.controller');

const auth = require('../middlewares/auth');

const router = require('express').Router();

router.get('/', indexController.index);
router.get('/articles', articlesController.index);
router.get('/signin', signInController.index);
router.get('/signup', signInController.index);

router.get('/list-cities', listcitiesController.index);



module.exports = router;
