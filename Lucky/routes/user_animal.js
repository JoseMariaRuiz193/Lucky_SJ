var express = require('express');
var UserController = require('../controllers/user');
var AnimalController = require('../controllers/animal');
var router = express.Router();
var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir: './upload/animals'});


router.post('/save', UserController.save);
router.delete('/user/:id', UserController.delete);
router.put('/user/:id', UserController.update);
router.post('/upload-image/:id', md_upload, UserController.upload);

router.post('/save/animal', AnimalController.save);
router.delete('/animal/:id', AnimalController.delete);
router.put('/animal/:id', AnimalController.update);
router.get('/animals/:last?', AnimalController.getAnimals);
router.post('/upload-image/:id', md_upload, AnimalController.upload);
router.get('/search/:search', AnimalController.search);





module.exports = router;