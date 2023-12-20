const express = require('express')
const { pessoa } = require('../repositorios/pessoa')
const router = express.Router()


const pessoa_repositorio = pessoa()


const rotas_pessoas = () => {

    router.delete('/pessoa/:id')

    router.post("/pessoa", (req, res) => {
       
        try{
            const pessoa_nova = pessoa_repositorio.create(req.body)
            
            res.send(pessoa_nova)
        }catch(error){
            
            const conteudo_erro = JSON.parse(error.message)

            return res.status(conteudo_erro.status).send(conteudo_erro.erros)
        }
    })

   
    router.delete("/pessoa/:id", (req, res) => {
        
        const {id} = req.params

        pessoa_repositorio.destroy(id)

        return res.status(200).send()
    })

    

    return router
}



module.exports = rotas_pessoas