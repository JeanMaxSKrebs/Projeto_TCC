const express = require('express');
const router = express.Router();

const controller = require('../controllers/sobreController')

router.get("/sobre", controller.get);

module.exports = router;