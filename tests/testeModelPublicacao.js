const {Publicacao, sequelize} = require("../models")

Publicacao.findByPk(1,{include:"autor"}).then(
    data => {
        console.log(data.toJSON());
        sequelize.close();
    }
)