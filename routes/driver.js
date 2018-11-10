const driver = require('express').Router();
const driverController = require('../controllers/driverController');
const respController = require('../controllers/responseController');

// initial route to get all
driver.route('/')
  .get(
      driverController.getAllDrivers,
      respController.sendOkResp,
      respController.sendErrResp);

// the route for the driver form
driver.route('/new')
  .post(
    driverController.createDriver,
    respController.sendOkResp,
    respController.sendErrResp);

driver.route('/:id')
  .get(
    driverController.getOneDriver,
    respController.sendOkResp,
    respController.sendErrResp)

  .delete(
    driverController.destroyDriver,
    respController.sendOkResp,
    respController.sendErrResp)

  .put(
    driverController.updateDriver,
    respController.sendOkResp,
    respController.sendErrResp);

  module.exports = driver;

