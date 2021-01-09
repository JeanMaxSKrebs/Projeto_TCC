const cadastroCliente = require("../models/cadastroCliente")

module.exports = {

  post: (req, res) => {
    cadastroCliente.create({
      nome: req.body.nome,
      cidade: req.body.cidade,
      cpf: req.body.cpf,
      senha: req.body.senha
    }).then(function(){
      console.log("Sucesso ao realizar a Inserção no Banco de Dados");
      res.status(200).render("../src/views/cadastroSucesso.handlebars");
    }).catch(function(err){
      console.log('Erro ao realizar a Inserção no Banco de Dados ' + err);
      res.status(200).render("../src/views/cadastroErro.handlebars");
    })
  },

    get: (req, res) => {
      res.status(200).render("E:/Projeto_TCC/src/views/cadastroCliente.handlebars");
    }
  }
  