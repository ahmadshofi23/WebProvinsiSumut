module.exports = {
  index: async (req, res) => {
    const name = 'Hello world';

    return res.render('signup/index', { name, title: 'Homepage | signup' });
  },
};
