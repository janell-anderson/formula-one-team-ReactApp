const driverdb = require('../models/driver');

function getAll(req, res, next) {
  driverdb.getAll()
    .then(data => {
      res.locals.driver = data;
      next();
    }).catch(next);
}

function getOne(req, res, next) {
  driverdb.getOne(req.params.id)
    .then(data => {
      res.locals.driver = data;
      next();
  }).catch(next);
}

function create(req, res, next) {
  driverdb.create(req.body)
    .then(data => {
      res.locals.driver = data
      console.log(res.locals.driver);
      next();
  }).catch(next);
}

function destroy(req, res, next) {
  driverdb.destroy(req.params.id)
    .then(data => {
      next();
    }).catch(next);
}

function update(req, res, next) {
  driverdb.update(req.body)
    .then(data => {
      res.locals.driver = data;
      next();
    }).catch(next);
}

module.exports= {
  getAll,
  getOne,
  create,
  destroy,
  update
}
