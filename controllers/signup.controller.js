const User = require('../models/User');

module.exports = {
  index: async (req, res) => {
    return res.render('signup/index', { title: 'Create User', cek: req.session.loggedin });
  },

  store: async (req, res) => {
    if (req.body.password.length < 7) {
      return res.status(403).send('Error password length');
    }

    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    return res.redirect('/signin');
  },
};
