const express = require('express');
const router = express.Router();
const adminController = require('../controller/controler');

router.get('/data',adminController.Data);
router.post('/datapost',adminController.dataPost);
router.put('/update/:id',adminController.dataUpdate);

module.exports = router;