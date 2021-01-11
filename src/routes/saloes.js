const express = require('express');
const router = express.Router();

const controller = require('../controllers/saloesController')

router.get("/saloes/:id", controller.get);

module.exports = router;