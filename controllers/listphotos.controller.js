module.exports = {
    index: async (req, res) => {
      const name = 'Hello world';
  
      return res.render('list-photos/index', { name, title: 'Homepage | list photos', cek: req.session.loggedin });
    },
  };
  