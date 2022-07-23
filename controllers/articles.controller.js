module.exports = {
  index: async (req, res) => {
    const name = 'Hello world';

    return res.render('articles/index', { name, title: 'Homepage | articles' });
  },
};
