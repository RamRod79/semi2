const router = require('express').Router();
const userRoutes = require('./user-routes');
const DrugsRoutes = require('./drugs-routes');

router.use('/users', userRoutes);
router.use('/drugs', DrugsRoutes);

module.exports = router;
