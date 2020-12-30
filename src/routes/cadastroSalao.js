const express = require('express');
const router = express.Router();

const controller = require('../controllers/cadastroSalaoController')

router.get("/cadastro-salao", controller.get);

module.exports = router;