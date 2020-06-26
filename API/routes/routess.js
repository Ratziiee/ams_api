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

router.post('/deleteEmployee',controller.deleteEmployee)
router.post('/deleteGuard',controller.deleteGuard)
router.post('/deleteVisitor',controller.deleteVisitor)
router.post('/deleteAllVisitor',controller.deleteAllVisitor)

router.post('/addEmployeeLogs',controller.addEmployeeLogs)
router.get('/login',controller.login)
router.post('/changePassword',controller.changePassword)

router.get('/getAllDesignation',controller.getAllDesignation);
router.get('/getAllDepartment',controller.getAllDepartment);
router.get('/getAllEmployeeType',controller.getAllEmployeeType);

router.get('/getAllGuard',controller.getAllGuard);
router.post('/updateGuardStatus',controller.updateGuardStatus);





module.exports = router;
