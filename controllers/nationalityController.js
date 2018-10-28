const nationalitydb = require('../models/nationality');

function getAll(req, res, next) {
  nationalitydb.getAll()
    .then(data => {
      res.locals.nation = data;
      next();
    }).catch(next);
}

function getOne(req, res, next) {
  nationalitydb.getOne(req.params.id)
    .then(data => {
      res.locals.nation = data;
      next();
  }).catch(next);
}

function getDriverNation(req, res, next) {
  nationalitydb.getDriverNation(req.params.id)
    .then(data => {
      res.locals.driver = data
      console.log(res.locals.posts);
      next();
  }).catch(next);
}

module.exports= {
  getAll,
  getOne,
  getDriverNation
}
