const indexController = require('../controllers/index.controller');
<<<<<<< HEAD
// const postController = require('../controllers/post.controller');
=======
>>>>>>> dafcc98bf8c4abd809948321ddd1f951cbd6e255

const auth = require('../middlewares/auth');

const router = require('express').Router();

router.get('/', indexController.index);

module.exports = router;
