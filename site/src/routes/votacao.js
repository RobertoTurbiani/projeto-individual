router.post("/votar_uniforme", function (req, res) {
    votacaoController.votar_uniforme(req, res);
});

module.exports = router;