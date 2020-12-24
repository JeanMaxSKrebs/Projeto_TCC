// const hostname = '127.0.0.1';
// const port = 3000;

const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("kkkkkkkkkkkkkkkkkkkkkkk");
});

app.get("/home", function(req, res){
    res.send("Página Home");
});

app.get("/sobre", function(req, res){
    res.send("Página Sobre");
});

app.get("/contato", function(req, res){
    res.send("Página Contato");
});

app.listen(3000);