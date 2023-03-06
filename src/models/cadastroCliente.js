const bd = require("./bd");
var bcrypt = require("bcryptjs");

const cadastro = bd.sequelize.define('clientes', {
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
},  {
    hooks: {
      beforeCreate: user => {
        const salt = bcrypt.genSaltSync();
        user.set('senha', bcrypt.hashSync(user.senha, salt));
      },
    },
    classMethods: {
      isPassword: (encodedPassword, senha) => bcrypt.compareSync(senha, encodedPassword),
    },
});

module.exports = cadastro;