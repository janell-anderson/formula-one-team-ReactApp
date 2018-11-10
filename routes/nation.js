const nation = require('express').Router();
const nationController = require('../controllers/nationController');
const respController = require('../controllers/responseController');

// initial route to get all
nation.route('/')
  .get(
      nationController.getAllNations,
      respController.sendOkResp,
      respController.sendErrResp);


nation.route('/:id')
  .get(
    nationController.getOneNation,
    nationController.getDriverNation,
    respController.sendOkResp,
    respController.sendErrResp)

  module.exports = nation;

