module.exports = {
    index: async (req, res) => {
      const name = 'Hello world';
  
      return res.render('list-culture/index', { name, title: 'Homepage | list culture', cek: req.session.loggedin });
    },
  };
  