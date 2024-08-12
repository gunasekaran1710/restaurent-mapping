const express = require('express');
const controller = require('../controller/userController');
const router = express.Router();

router.post('/hotalcreate',controller.createhotal);
router.post('/catagorycreate',controller.createcategory);
router.post('/createfoods',controller.createfoods);
router.get('/viewcategory',controller.viewcategory);
router.get('/viewfoods',controller.viewfoods);

module.exports = router;
