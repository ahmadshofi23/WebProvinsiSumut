module.exports = {
    index: async (req, res) => {
      const name = 'Hello world';
  
      return res.render('rumah-adat/index', { name, title: 'Homepage | rumah adat', cek: req.session.loggedin });
    },
  };
  