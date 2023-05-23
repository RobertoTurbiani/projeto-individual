function votar_uniforme(req, res) {
    const fkUniforme = req.params.fkUniforme;
    outfitModel
    .votar_uniforme(fkUniforme)
    .then(function (resultado) {
        res.json(resultado);
    })
    .catch(function (erro) {
        res.status(204).json(erro.sqlMessage);
    });
}

module.exports = {
    votar_uniforme,
}