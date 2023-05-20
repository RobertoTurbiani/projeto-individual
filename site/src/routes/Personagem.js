var express = require("express");
var router = express.Router();

var personagemController = require("../controllers/personagemController");

router.get("/", function (req, res) {
    personagemController.testar(req, res);
});


//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js

router.post("/enviar", function (req, res) {
    personagemController.enviar(req, res);
});

module.exports = router;