const bd = require("./bd");

const cadastro = bd.sequelize.define('cliente', {
    nome: {
        type: bd.Sequelize.STRING
    },
    cidade: {
        type: bd.Sequelize.STRING
    },
    cpf: {
        type: bd.Sequelize.STRING
    },
    senha: {
        type: bd.Sequelize.STRING
    }

});

module.exports = cadastro;