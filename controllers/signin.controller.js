const User = require('../models/User');

module.exports = {
  index: async (req, res) => {
    return res.render('signin/index', { title: 'Homepage | signin', message: null, cek: req.session.loggedin});
  },
  login: async (req, res) => {
    hasil = await User.findOne({
      where: {
        name: req.body.name,
        password: req.body.password
      }
    })
    if(hasil != null){
      req.session.loggedin = true;
      res.redirect('/');
    } else {
      res.render('signin/index', {
        message: 'Username or Password does not match.',
        messageClass: 'alert-danger', 
        cek: req.session.loggedin
      });
    }
  }
};
