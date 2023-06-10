var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.post("/votar_uniforme/:votos", function (req, res) {
    usuarioController.votar_uniforme(req, res);
});

router.post("/votar_heroi/:votos", function (req, res) {
    usuarioController.votar_heroi(req, res);
});

router.get("/mostrarVotos", function (req, res) {
    usuarioController.mostrarVotos(req, res);
});

router.get("/mostrarPersonagem", function (req, res) {
    usuarioController.mostrarPersonagem(req, res);
});

router.get("/cenario", function (req, res) {
    usuarioController.cenario(req, res);
});

module.exports = router;