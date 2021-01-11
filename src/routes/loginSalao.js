const express = require('express');
const router = express.Router();

const controller = require('../controllers/loginSalaoController.js')

router.get("/login-salao", controller.get);

module.exports = router;