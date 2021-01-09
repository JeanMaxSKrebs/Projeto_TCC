const express = require("express");

const PORT = 3000;
const app = express();
//carregar css e img
app.use(express.static(__dirname + '/src'));

const handlebars = require("express-handlebars");
const bodyParser = require("body-parser")

app.engine('handlebars', handlebars({ defaultLayout: "E:/Projeto_TCC/src/views/layouts/estrutura" }));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Rotas
const indexRouter = require("./src/routes/index");
const cadastroClienteRouter = require("./src/routes/cadastroCliente");
const cadastroSalaoRouter = require("./src/routes/cadastroSalao");
const homeRouter = require("./src/routes/home");
const sobreRouter = require("./src/routes/sobre");
const contatoRouter = require("./src/routes/contato");
app.use(indexRouter);
app.use(cadastroClienteRouter);
app.use(cadastroSalaoRouter);
app.use(homeRouter);
app.use(sobreRouter);
app.use(contatoRouter);

app.listen(PORT, err => {
    if (err) return console.log(`Cannot Listen on PORT: ${PORT}`);
    console.log(`Server is Listening on: http://localhost:${PORT}/`);
});