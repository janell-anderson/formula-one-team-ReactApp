const nationdb = require('../models/nation');

function getAllNations(req, res, next) {
  nationdb.getAllNations()
    .then(data => {
      res.locals.nation = data;
      next();
    }).catch(next);
}

function getOneNation(req, res, next) {
  nationdb.getOneNation(req.params.id)
    .then(data => {
      res.locals.nation = data;
      next();
  }).catch(next);
}

function getDriverNation(req, res, next) {
  nationdb.getDriverNation(req.params.id)
    .then(data => {
      res.locals.driver = data
      console.log(res.locals.posts);
      next();
  }).catch(next);
}

module.exports= {
  getAllNations,
  getOneNation,
  getDriverNation
}
