function votar_uniforme(votos) {
    var instrucao = `
    INSERT INTO uniforme (votos)
     VALUES WHERE idPersonagem = fkPersonagem ('${votos}');`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function votar_uniforme(votos) {
    var query = `
    SELECT count(*) as votes, uniforme.name
    FROM usuario
    INNER JOIN uniforme
    ON usuario = uniforme.id
    WHERE fkPersonagem = ${votos};
    `;
    return database.executar(query);
  }
  
  module.exports = {
   votar_uniforme,
};