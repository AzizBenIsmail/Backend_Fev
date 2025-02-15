var express = require('express');
var router = express.Router();
const carController = require('../controllers/carController');
/* GET home page. */
router.get('/getAllCars', carController.getAllCars );
router.get('/getCarById/:id', carController.getCarById );
router.post('/addCar', carController.addCar );
router.put('/updateCar/:id', carController.updateCar );
router.delete('/deleteCarById/:id', carController.deleteCarById );

module.exports = router;
