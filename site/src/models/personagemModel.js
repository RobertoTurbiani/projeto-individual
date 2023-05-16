var database = require("../database/config")




function selecionar() {
    var instrucao = `
    INSERT INTO personagens (nome, url_image, heal_points, attack, defense, hero) VALUES ('${nome}', '${url_image}', '${heal_points}'
    , '${attack}' , '${defense}'  , '${hero}');
`;
return database.executar(instrucao);
}


module.exports = {
    
    selecionar,
};