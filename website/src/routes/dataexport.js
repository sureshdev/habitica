var express = require('express');
var router = new express.Router();
var dataexport = require('../controllers/dataexport');
var auth = require('../controllers/auth');
var nconf = require('nconf');
var i18n = require('../i18n');
var middleware = require('../middleware.js');

/* Data export */
router.get('/habits.json',auth.authWithSession,i18n.getUserLanguage,dataexport.habits); //[todo] encode data output options in the data controller and use these to build routes
router.get('/dailies.json',auth.authWithSession,i18n.getUserLanguage,dataexport.dailies); //[todo] encode data output options in the data controller and use these to build routes
router.get('/todos.json',auth.authWithSession,i18n.getUserLanguage,dataexport.todos); //[todo] encode data output options in the data controller and use these to build routes
router.get('/tasks.json',auth.authWithSession,i18n.getUserLanguage,dataexport.tasks); //[todo] encode data output options in the data controller and use these to build routes
router.get('/rewards.json',auth.authWithSession,i18n.getUserLanguage,dataexport.rewards); //[todo] encode data output options in the data controller and use these to build routes
router.get('/history.csv',auth.authWithSession,i18n.getUserLanguage,dataexport.history); //[todo] encode data output options in the data controller and use these to build routes
router.get('/userdata.xml',auth.authWithSession,i18n.getUserLanguage,dataexport.leanuser,dataexport.userdata.xml);
router.get('/userdata.json',auth.authWithSession,i18n.getUserLanguage,dataexport.leanuser,dataexport.userdata.json);
router.get('/avatar-:uuid.html', i18n.getUserLanguage, middleware.locals, dataexport.avatarPage);
router.get('/avatar-:uuid.png', i18n.getUserLanguage, middleware.locals, dataexport.avatarImage);

module.exports = router;
