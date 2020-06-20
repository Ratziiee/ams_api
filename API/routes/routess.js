const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/', controller.test);
router.get('/getAllEmployees',controller.getAllEmployees)
router.get('/getAllEmployeesLogs',controller.getAllEmployeesLogs)
router.get('/getSingleEmployeesLogs',controller.getSingleEmployeesLogs)

router.post('/postAddEmployee',controller.postAddEmployee)

router.get('/getAllEmployeesLogs',controller.getAllEmployeesLogs)
router.get('/getSingleEmployeesLogs',controller.getSingleEmployeesLogs)

router.post('/postAddEmployee',controller.postAddEmployee)

router.post('/editProfile',controller.postEditProfile)
router.post('/addVisitor',controller.addVisitor)
router.post('/addGuard',controller.addGuard)


module.exports = router;
