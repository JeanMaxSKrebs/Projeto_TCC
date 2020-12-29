// const hostname = '127.0.0.1';
// const port = 3000;

const express = require("express");

const app = express();
//carregar css e img
app.use(express.static(__dirname + '/src'));

const PORT = 3000;

//Create Express Router
const router = require("./src/routes/index");
app.use(router);

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

connection.query('Select * from saloes', function (err, rows, fields) {
    if (!err) {
        console.log('Resultado: ', rows);
    } else {
        console.log('Erro ao realizar a consulta');
    }
});

app.listen(PORT, err => {
    if (err) return console.log(`Cannot Listen on PORT: ${PORT}`);
    console.log(`Server is Listening on: http://localhost:${PORT}/`);
});