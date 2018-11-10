const apiRouter = require('express').Router();

// Calling both auth and blogs routers and using them as a path
const driverRouter = require('./driver');
const countryRouter = require('./country');


// whatever is in the path it will render from the apiRouter
apiRouter.use('/driver', driverRouter);
apiRouter.use('/country', countryRouter);

module.exports = apiRouter;