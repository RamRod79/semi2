const router = require('express').Router();
const userRoutes = require('./user-routes');
const DrugsRoutes = require('./drugs-routes');
const sideEffectRoutes = require('./sideEffect-Routes');
const  UserQueryRoutes= require('./userQuery-Routes');
const {Drug, User, UserQuery, SideEffect } = require('../../models');

router.use('/users', userRoutes);
router.use('/drugs', DrugsRoutes);
router.use('/userQuery', UserQueryRoutes);
router.use('/sideEffect', sideEffectRoutes);

module.exports = router;
