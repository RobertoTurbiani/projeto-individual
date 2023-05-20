var personagemModel = require("../models/personagemModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA personagemController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function enviar(req, res) {
    var nome = req.body.nomeServer;
    var hp = req.body.hpServer;
    var att = req.body.attServer;
    var def = req.body.defServer;
    var hero = req.body.heroServer;
    
    personagemModel.enviar(nome,hp,att,def,hero)
    .then(
        function (resultado) {
        res.json(resultado);
    }).catch(
        function (erro) {
            console.log(erro);
            console.log("\nHouve um erro ao realizar a consulta! Erro: ", erro.sqlMessage
            (erro.sqlMessage)
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
}


module.exports = {
  
    enviar
}