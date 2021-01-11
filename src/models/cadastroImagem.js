const bd = require("./bd");

const fotos = bd.sequelize.define('fotos', {
    imagem: {
        type: bd.Sequelize.BLOB
    }

});

module.exports = fotos;