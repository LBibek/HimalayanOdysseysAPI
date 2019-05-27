var router = require('express').Router();
var pageController = require('../controllers/pageController');
var userController = require('../controllers/userController');

router.get('/:pageId', pageController.getPage);
router.get('/', function(req, res){res.redirect('/users')})

// posting user
router.post('/post/user', userController.saveUser);
router.post('/update/user/:userId', userController.updateUser);
router.get('/get/user', userController.getUser);
router.get('/get/single/user/:userId', userController.getSingleUser);
// end
module.exports = router;