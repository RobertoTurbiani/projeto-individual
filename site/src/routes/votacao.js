var express = require("express");
var router = express.Router();

var votacaoController = require("../controllers/votacaoController");


router.put("/votos", function (req, res) {
    votacaoController.votar_uniforme(req, res);
});

module.exports = router;