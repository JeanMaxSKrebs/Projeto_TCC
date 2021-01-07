const Sequelize = require('sequelize');

const sequelize = new Sequelize('tcc', 'tcc', '123456', {
    host: 'localhost',
    dialect: 'mysql'
  });

sequelize.authenticate().then(function(){
   console.log("Sucesso ao conectar no Banco de Dados");
}).catch(function(){
    console.log("Erro ao conectar no Banco de Dados: "+ err);
});

module.exports= {
    Sequelize: Sequelize,
    sequelize: sequelize
}