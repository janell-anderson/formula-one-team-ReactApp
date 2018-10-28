const nationality = require('express').Router();
const nationalityController = require('../controllers/nationalityController');
const respController = require('../controllers/responseController');

// initial route to get all
nationality.route('/')
  .get(
      nationalityController.getAll,
      respController.sendOkResp,
      respController.sendErrResp);


nationality.route('/:id')
  .get(
    nationalityController.getOne,
    nationalityController.getDriverNation,
    respController.sendOkResp,
    respController.sendErrResp)

  module.exports = nationality;

