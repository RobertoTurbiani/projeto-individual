var votacaoModel = require("../models/votacaoModel");

var sessoes = [];


function testar(req, res) {
    console.log("ENTRAMOS NA personagemController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function mostrarVotos(req, res) {
    votacaoModel.mostrarVotos()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}


module.exports = {
    mostrarVotos,
}