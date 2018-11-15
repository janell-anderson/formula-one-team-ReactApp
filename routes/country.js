const country = require('express').Router();
const countryController = require('../controllers/countryController');
const respController = require('../controllers/responseController');

// initial route to get all
country.route('/')
  .get(
      countryController.getAllCountries,
      respController.sendOkRespCountry,
      respController.sendErrResp);


country.route('/:id')
  .get(
    countryController.getOneCountry,
    countryController.getDriverCountry,
    respController.sendOkRespCountry,
    respController.sendErrResp)

  module.exports = country;

