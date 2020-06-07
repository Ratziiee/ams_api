const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/', controller.test);
router.get('/getAllEmployees',controller.getAllEmployees)



module.exports = router;