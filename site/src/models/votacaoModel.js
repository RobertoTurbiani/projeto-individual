var database = require("../database/config")

function votar_uniforme() {
    var instrucao = `
    UPDATE votos_uniforme set votos = votos + 1 where idUniforme = idUniforme;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function mostrarVotos() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function mostrarVotos()");
    var instrucao = `
        SELECT votos FROM votos_uniforme;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


  
  module.exports = {
    mostrarVotos,  
    votar_uniforme,
};