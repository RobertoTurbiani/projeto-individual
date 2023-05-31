var votacaoModel = require("../models/votacaoModel");

var sessoes = [];


function testar(req, res) {
    console.log("ENTRAMOS NA personagemController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function votar_uniforme(req, res) {

    var traje = req.body.trajeServer;
    console.log(traje);
    votacaoModel.votar_uniforme(traje)
    .then(function (resultado) {
        res.json(resultado);
    })
    .catch(function (erro) {
        console.log("Deu erro");
        console.log(erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function votos(req, res) {
    var traje = req.params.traje;
    votacaoModel.votos(traje)
    .then(function (resultado) {
        res.json(resultado);
    })
    .catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    });
}


function votar(req, res) {
    var traje = req.params.traje;
    votacaoModel.votar(traje)
    .then(function (resultado) {
        res.json(resultado);
    })
    .catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    votar,
    votos,
    votar_uniforme,
}