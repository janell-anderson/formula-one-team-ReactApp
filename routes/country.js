const country = require('express').Router();
const countryController = require('../controllers/countryController');
const respController = require('../controllers/responseController');

// initial route to get all
country.route('/')
  .get(
      countryController.getAllcountrys,
      respController.sendOkResp,
      respController.sendErrResp);


country.route('/:id')
  .get(
    countryController.getOnecountry,
    countryController.getDrivercountry,
    respController.sendOkResp,
    respController.sendErrResp)

  module.exports = country;

