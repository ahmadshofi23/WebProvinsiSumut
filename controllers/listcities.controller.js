module.exports = {
    index: async (req, res) => {
      const name = 'Hello world';
  
      return res.render('list-cities/index', { name, title: 'Homepage | cities', cek: req.session.loggedin });
    },
  };
  