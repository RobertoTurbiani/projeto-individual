var database = require("../database/config")

function votar_uniforme(votos) {
    var instrucao = `
    UPDATE uniforme
        SET votos = ${votos} WHERE idUniforme = 3 ; 
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
   votar_uniforme,
};