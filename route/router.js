const express = require('express');
const router = express.Router();
const adminController = require('../controller/controler');

router.get('/',adminController.welcome);
router.get('/data',adminController.Data);
router.post('/datapost',adminController.dataPost);

module.exports = router;