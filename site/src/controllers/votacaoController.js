var votacaoModel = require("../models/votacaoModel");

var sessoes = [];


function testar(req, res) {
    console.log("ENTRAMOS NA personagemController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function votar_uniforme(req, res) {
    var traje = req.body.trajeServer;
    votacaoModel.votar_uniforme(traje)
    .then(function (resultado) {
        res.json(resultado);
    })
    .catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    votar_uniforme,
}