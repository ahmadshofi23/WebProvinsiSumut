const indexController = require('../controllers/index.controller');
const signInController = require('../controllers/signin.controller');
const signUpController = require('../controllers/signup.controller');
const articlesController = require('../controllers/articles.controller');
const listcitiesController = require('../controllers/listcities.controller');

const auth = require('../middlewares/auth');
const placeController = require('../controllers/placeController');

const router = require('express').Router();

router.get('/', indexController.index);
router.get('/articles', articlesController.index);
router.get('/place', placeController.index);
router.get('/signin', signInController.index);
router.get('/signup', signUpController.index);

router.post('/signup/store', signUpController.store);

router.get('/list-cities', listcitiesController.index);



module.exports = router;
