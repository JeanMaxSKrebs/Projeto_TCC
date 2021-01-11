const cadastro = require("../models/cadastroSalao");

module.exports = {

    get: (req, res) => {
        cadastro.findAll().then(function(saloes){
            res.status(200).render("E:/Projeto_TCC/src/views/index.handlebars", {saloes: saloes});
        })
    }
}