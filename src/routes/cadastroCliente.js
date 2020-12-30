const express = require('express');
const router = express.Router();

const controller = require('../controllers/cadastroClienteController')

router.get("/cadastro-cliente", controller.get);

module.exports = router;