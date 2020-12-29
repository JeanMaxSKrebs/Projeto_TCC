const express = require('express');
const router = express.Router();

router.get("/", function (req, res) {
    res.status(200).sendFile("C:/Projeto_TCC/src/views/index.html");
});

router.get("/home", function (req, res) {
    res.status(200).sendFile("C:/Projeto_TCC/src/views/index.html");
});

router.get("/sobre", function (req, res) {
    res.status(200).sendFile("C:/Projeto_TCC/src/views/sobre.html");
});

router.get("/contato", function (req, res) {
    res.status(200).sendFile("C:/Projeto_TCC/src/views/contato.html");
});

module.exports = router;
