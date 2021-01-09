const express = require('express');
const router = express.Router();
const cadastroCliente = require("../models/cadastroCliente")

const controller = require('../controllers/cadastroClienteController')

router.get("/cadastro-cliente", controller.get);
router.post("/cadastro-cliente", controller.post);

module.exports = router;