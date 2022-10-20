const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const drugRoutes= require('./api/drugs-routes');
// *** TESTONG
// const db = require('../models')

router.use('/', homeRoutes);
router.use('/api', apiRoutes);


module.exports = router ;
