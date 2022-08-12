const ListFavorite = require('../models/ListFavorite');

module.exports = {
  index: async (req, res) => {
    const list = await ListFavorite.findAll();
    
    res.render('list-favorite/index', { 
        data: list,
        cek: req.session.loggedin
     });
  },
};
