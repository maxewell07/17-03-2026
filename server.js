//Importação a partir de commonJS:
//var express = require("express");

import express from "express";

const app = express();
const porta = 3000;

app.get("/", (request, response) =>{
    response.send("Olá, mundo");
});

app.get("/usuarios", (request, response) =>{
    response.json({
        id:1,
        nome: "maxwell",
        profissao: "Aluno"
    });
});

app.get("/usuarios", (request, response) =>{
    response.json([
        {
        pedido:222,
        sabor: "calabresa",
        molho: "verde"
        }
    ]);

});



app.listen(porta, (request, response) =>{
    console.log(`Servidor rodando: http://127.0.0.1:${porta}`)
})