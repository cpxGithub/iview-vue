module.exports = function(app) {
  app.get('/api/login', function (req, res) {
    res.send({code: 10, msg: 'success'});
  });
}