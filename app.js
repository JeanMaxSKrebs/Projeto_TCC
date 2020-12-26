// const hostname = '127.0.0.1';
// const port = 3000;

const express = require("express");

const app = express();
app.use(express.static(__dirname + '/src'));
//conexao sql
const mysql = require("mysql");

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'tcc',
    password: '123456',
    database: 'tcc'
});
connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});

connection.query('Select * from saloes', function(err, rows, fields){
    if(!err){
        console.log('Resultado: ', rows);
    } else{
        console.log('Erro ao realizar a consulta');
    }
});

app.get("/", function (req, res) {
    res.sendFile("E:/Projeto_TCC/src/index.html");
});

app.get("/home", function (req, res) {
    res.sendFile("E:/Projeto_TCC/src/index.html");
});

app.get("/sobre", function (req, res) {
    res.sendFile("E:/Projeto_TCC/src/sobre.html");
});

app.get("/contato", function (req, res) {
    res.sendFile("E:/Projeto_TCC/src/contato.html");
});

app.listen(3000);