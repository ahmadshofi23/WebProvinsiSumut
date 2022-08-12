const indexController = require('../controllers/index.controller');
const signInController = require('../controllers/signin.controller');
const signUpController = require('../controllers/signup.controller');
const articlesController = require('../controllers/articles.controller');
const listcitiesController = require('../controllers/listcities.controller');
const rumahAdatController = require('../controllers/rumahadat.controller');
const listPhotosController = require('../controllers/listphotos.controller');
const listCultureController = require('../controllers/listculture.controller');

const auth = require('../middlewares/auth');
const placeController = require('../controllers/placeController');
const listfavoriteController = require('../controllers/listfavorite.controller');

const router = require('express').Router();

router.get('/', indexController.index);
router.get('/articles', articlesController.index);
router.get('/place', placeController.index);
router.get('/rumah-adat', rumahAdatController.index);
router.get('/list-photos', listPhotosController.index);
router.get('/list-culture', listCultureController.index);
router.get('/list-favorite', listfavoriteController.index);
router.get('/signin', signInController.index);
router.post('/signin/login', signInController.login);
router.get('/signup', signUpController.index);

router.post('/signup/store', signUpController.store);

router.get('/list-cities', listcitiesController.index);



module.exports = router;
