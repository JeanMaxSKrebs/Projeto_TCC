const bd = require("./bd");

const cadastro = bd.sequelize.define('saloes', {
    nome: {
        type: bd.Sequelize.STRING
    },
    cidade: {
        type: bd.Sequelize.STRING
    },
    cnpj: {
        type: bd.Sequelize.STRING
    },
    senha: {
        type: bd.Sequelize.STRING
    },
    imagem: {
        type: bd.Sequelize.BLOB
    }


});

module.exports = cadastro;