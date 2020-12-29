// const hostname = '127.0.0.1';
// const port = 3000;

const express = require("express");

const app = express();

const PORT = 3000;
const path = require("path");
const bodyParser = require("body-parser");
const bootstrap = require("./src/boostrap");

//Request Parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//Create Express Router
const router = express.Router();
app.use(router);

const rootPath = path.resolve("./dist");
app.use(express.static(rootPath));

bootstrap(app, router);

// app.use(express.static(__dirname + '/src'));
//conexao sql
// const mysql = require("mysql");

// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'tcc',
//     password: '123456',
//     database: 'tcc'
// });
// connection.connect(function (err) {
//     if (err) {
//         console.error('error connecting: ' + err.stack);
//         return;
//     }

//     console.log('connected as id ' + connection.threadId);
// });

// connection.query('Select * from saloes', function (err, rows, fields) {
//     if (!err) {
//         console.log('Resultado: ', rows);
//     } else {
//         console.log('Erro ao realizar a consulta');
//     }
// });

router.get("/", (req, res, next) => {
    res.send("Hello There");
});

// app.get("/", function (req, res) {
//     res.sendFile("E:/Projeto_TCC/src/index.html");
// });

// app.get("/home", function (req, res) {
//     res.sendFile("E:/Projeto_TCC/src/index.html");
// });

// app.get("/sobre", function (req, res) {
//     res.sendFile("E:/Projeto_TCC/src/sobre.html");
// });

// app.get("/contato", function (req, res) {
//     res.sendFile("E:/Projeto_TCC/src/contato.html");
// });

router.use((err, req, res, next) => {
    if (err) {
        return res.send(err.message);
    }
});


app.listen(PORT, err => {
    if (err) return console.log(`Cannot Listen on PORT: ${PORT}`);
    console.log(`Server is Listening on: http://localhost:${PORT}/`);
});