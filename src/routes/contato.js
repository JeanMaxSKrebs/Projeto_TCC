const express = require('express');
const router = express.Router();

const controller = require('../controllers/contatoController')

router.get("/contato", controller.get);

module.exports = router;