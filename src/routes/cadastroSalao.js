const express = require('express');
const router = express.Router();
const cadastroSalao = require("../models/cadastroSalao")

const controller = require('../controllers/cadastroSalaoController')

router.get("/cadastro-salao", controller.get);
router.post("/cadastro-salao", controller.post);

module.exports = router;