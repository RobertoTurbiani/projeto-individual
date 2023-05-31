var database = require("../database/config")

function votar_uniforme() {
    var instrucao = `
    INSERT INTO votos_uniforme (votos) VALUES
         (${1}) 
        `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function votos(traje) {
    var instrucao = `
    SELECT votos FROM votos_uniforme
    WHERE traje = ${traje}
        `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function votar(traje) {
    var instrucao = `
    SELECT * FROM votos_uniforme
        `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// function updateOutitAndCharacter(fkCharacter, fkOutfit, id) {
//     var query = `
//         UPDATE tb_users
//         SET fk_character = ${fkCharacter}, fk_outfit = ${fkOutfit}
//         WHERE id = ${id};
//         `;
//     return database.executar(query);
// }

// function votar_uniforme(votos) {
//     var query = `
//     SELECT count(*) as votes, uniforme.name
//     FROM usuario
//     INNER JOIN uniforme
//     ON usuario = uniforme.id
//     WHERE fkPersonagem = ${votos};
//     `;
//     return database.executar(query);
//   }
  
  module.exports = {
    votar,
    votos,  
   votar_uniforme,
};