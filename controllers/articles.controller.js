module.exports = {
  index: async (req, res) => {
    const name = 'Hello world';

    return res.render('index', { name, title: 'Homepage | articles' });
  },
};
