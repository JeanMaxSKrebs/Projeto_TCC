const express = require('express');
const router = express.Router();

const controller = require('../controllers/estruturaController')

router.get("/", controller.get);

module.exports = router;