const {Usuario} = require("../models")

module.exports = {
    registrar: (req,res)=>{
        // criar um usuario
    },
    buscar: async (req,res)=>{
        // carregar todos os usuarios
        let usuarios = await Usuario.findAll();

        //enviar para o cliente
        res.send(usuarios);
    }
}