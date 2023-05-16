var personagemModel = require("../models/personagemModel");

var sessoes = [];

function selecionar(req, res) {
    var nome = req.body.nomeServer;
    var url = req.body.urlServer;
    var hp = req.body.hpServer;
    var att = req.body.attServer;
    var def = req.body.defServer;
    var hero = req.body.heroServer;

    personagemModel.selecionar()
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
  
    selecionar
}