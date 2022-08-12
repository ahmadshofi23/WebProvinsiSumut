module.exports = {
  index: async (req, res) => {
    const name = 'Hello world';
    console.log("cek : "+req.session.loggedin);
    return res.render('index', { name, title: 'Homepage', cek: req.session.loggedin});
  },
};
