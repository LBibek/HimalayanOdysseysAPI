var router = require('express').Router();
var pageController = require('../controllers/pageController');
var userController = require('../controllers/userController');
var itemController = require('../controllers/itemController');
router.get('/:pageId', pageController.getPage);
router.get('/', function(req, res){res.redirect('/users')})
router.get('/', function(req, res){res.redirect('/items')})
// posting user
router.post('/post/user', userController.saveUser);
router.post('/update/user/:userId', userController.updateUser);
router.get('/get/user', userController.getUser);
router.get('/get/single/user/:userId', userController.getSingleUser);
// end
router.post('/post/item', itemController.saveItem);
router.post('/update/item/:itemId', itemController.updateItem);
router.get('/get/all/item', itemController.getItem);
router.get('/get/single/item/:itemId', itemController.getSingleItem);

// settings
router.post('/post/setting/:id', itemController.postSetting);
router.get('/get/setting/', itemController.getSetting);
// end

module.exports = router;