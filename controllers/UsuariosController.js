const {Usuario} = require("../models")
const {Op} = require("sequelize")
const bcrypt = require("bcrypt")


module.exports = {
    registrar: async (req, res) => {
        try {
                // Capturando os dados do corpo da requisição
                const {nome, email, senha, foto} = req.body;
    
                // Criptografando a senha inserida pelo usuario
                const hash = bcrypt.hashSync(senha, 10);
    
                // Verificando se o e-mail já existe
                const verificarUsuarioCadastrado = await Usuario.findOne({where:{email:email}})
                if(verificarUsuarioCadastrado){
                    return res.status(409).json({erro: 'Falha na autenticação'});
                }
    
                // Criando um novo usuário
                const novoUsuario = await Usuario.create(
                    {nome, email, senha:hash, foto}
                )
    
                // Retornando informação de sucesso para o cliente
                return res.status(201).json(novoUsuario);
    
            } catch (error) {
                console.log(error);
                res.status(500).json({error});
            }
        },
    buscar: async (req,res)=>{
        // capturar o trecho q esta sendo buscado
        let trechoBuscado = req.query.q;

       //carregar os usuarios q tenham o trecho buscado no nome
       // "SELECT * FROM usuarios WHERE nome like %${trechoBuscado}%"
        let usuarios = await Usuario.findALL(
            {
                where:{nome:{[Op.substring]:trechoBuscado}}
            }
        )
        //enviar para o cliente
        res.send(usuarios);
    }
}