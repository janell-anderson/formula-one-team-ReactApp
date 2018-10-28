const driver = require('express').Router();
const driverController = require('../controllers/driverController');
const respController = require('../controllers/responseController');

// initial route to get all
driver.route('/')
  .get(
      driverController.getAll,
      respController.sendOkResp,
      respController.sendErrResp);

// the route for the driver form
driver.route('/new')
  .post(
    driverController.create,
    respController.sendOkResp,
    respController.sendErrResp);

driver.route('/:id')
  .get(
    driverController.getOne,
    respController.sendOkResp,
    respController.sendErrResp)

  .delete(
    driverController.destroy,
    respController.sendOkResp,
    respController.sendErrResp)

  .put(
    driverController.update,
    respController.sendOkResp,
    respController.sendErrResp);

  module.exports = driver;

