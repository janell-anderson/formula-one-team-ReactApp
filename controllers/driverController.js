const driverdb = require('../models/driver');

function getAllDrivers(req, res, next) {
  driverdb.getAllDrivers()
    .then(data => {
      res.locals.driver = data;
      next();
    }).catch(next);
}

function getOneDriver(req, res, next) {
  driverdb.getOneDriver(req.params.id)
    .then(data => {
      res.locals.driver = data;
      next();
  }).catch(next);
}

function createDriver(req, res, next) {
  driverdb.createDriver(req.body)
    .then(data => {
      res.locals.driver = data
      next();
  }).catch(next);
}

function destroyDriver(req, res, next) {
  driverdb.destroyDriver(req.params.id)
    .then(data => {
      next();
    }).catch(next);
}

function updateDriver(req, res, next) {
  driverdb.updateDriver(req.body)
    .then(data => {
      res.locals.driver = data;
      next();
    }).catch(next);
}

module.exports= {
  getAllDrivers,
  getOneDriver,
  createDriver,
  destroyDriver,
  updateDriver
}
