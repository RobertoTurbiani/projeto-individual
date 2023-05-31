var express = require("express");
var router = express.Router();

var votacaoController = require("../controllers/votacaoController");


router.post("/votar_uniforme", function (req, res) {
    votacaoController.votar_uniforme(req, res);
});

router.get("/votos/:traje", function (req, res) {
    votacaoController.votos(req, res);
});

router.post("/votar", function (req, res) {
    votacaoController.votar(req, res);
});


module.exports = router;