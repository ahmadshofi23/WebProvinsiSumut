module.exports = {
    index: async (req, res) => {
      const name = 'Hello world';
  
      return res.render('place/index', { name, title: 'Homepage | place', cek: req.session.loggedin });
    },
  };