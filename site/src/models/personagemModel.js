var database = require("../database/config")

function invocar() {
    var query =
      `SELECT * FROM personagens;`
      console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(query);
  }
  


function enviar(nome,heal_points, attack, defense,hero) {
    var instrucao = `
    INSERT INTO personagens (nome, heal_points, attack, defense, hero)
     VALUES ('${nome}','${heal_points}'
    ,'${attack}','${defense}',${hero});`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    invocar,
    enviar,
};