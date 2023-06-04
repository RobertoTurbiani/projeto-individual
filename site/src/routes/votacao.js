var express = require("express");
var router = express.Router();

var votacaoController = require("../controllers/votacaoController");


router.put("/votar_uniforme/:votos", function (req, res) {
    votacaoController.votar_uniforme(req, res);
});

router.get("/mostrarVotos", function (req, res) {
    votacaoController.mostrarVotos(req, res);
});

router.post("/alterarvotos/:traje", function (req, res) {
    votacaoController.alterarvotos(req, res);
});


module.exports = router;