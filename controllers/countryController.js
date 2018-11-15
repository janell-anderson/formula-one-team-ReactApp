const countrydb = require('../models/country');

function getAllCountries(req, res, next) {
  countrydb.getAllCountries()
    .then(data => {
      res.locals.country = data;
      next();
    }).catch(next);
}

function getOneCountry(req, res, next) {
  countrydb.getOneCountry(req.params.id)
    .then(data => {
      res.locals.country = data;
      next();
  }).catch(next);
}

function getDriverCountry(req, res, next) {
  countrydb.getDriverCountry(req.params.id)
    .then(data => {
      res.locals.driver = data
      console.log(res.locals.driver);
      next();
  }).catch(next);
}

module.exports= {
  getAllCountries,
  getOneCountry,
  getDriverCountry
}
