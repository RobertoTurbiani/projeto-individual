var express = require("express");
var router = express.Router();

var votacaoController = require("../controllers/votacaoController");


router.put("/votar_uniforme", function (req, res) {
    votacaoController.votar_uniforme(req, res);
});

router.get("/votos", function (req, res) {
    votacaoController.votos(req, res);
});


module.exports = router;