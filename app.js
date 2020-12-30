// const hostname = '127.0.0.1';
// const port = 3000;

const express = require("express");

const app = express();
//carregar css e img
app.use(express.static(__dirname + '/src'));

const PORT = 3000;

//Create Express Router
const indexRouter = require("./src/routes/index");
const homeRouter = require("./src/routes/home");
const sobreRouter = require("./src/routes/sobre");
const contatoRouter = require("./src/routes/contato");
app.use(indexRouter);
app.use(homeRouter);
app.use(sobreRouter);
app.use(contatoRouter);

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