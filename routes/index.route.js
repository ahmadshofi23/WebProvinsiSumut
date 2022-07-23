const indexController = require('../controllers/index.controller');
// const postController = require('../controllers/post.controller');

const auth = require('../middlewares/auth');

const router = require('express').Router();

router.get('/', indexController.index);

module.exports = router;
