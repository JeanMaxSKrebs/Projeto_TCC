const festas = require("../models/cadastroImagem");
const cadastro = require("../models/cadastroSalao");


module.exports = {

  get: (req, res) => {
    cadastro.findAll({
      where: {
        id: req.params.id
      }
    }).then(function (salao) {
      festas.findAll({
        where: {
          id_saloes: req.params.id
        }
      }).then(function (festas) {
        console.log(salao);

        res.status(200).render("E:/Projeto_TCC/src/views/saloes.handlebars", { festas: festas, salao: salao })});
    })
  },
}
