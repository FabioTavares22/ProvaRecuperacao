require('dotenv').config()

const express = require("express")

const porta = process.env.PORTA

const registarLogMiddleware = require("./middlewares/registrarLogMiddleware")


const rotas_pessoa = require('./rotas/pessoa')


const app = express()


app.use(express.json())


app.use(registarLogMiddleware)


app.use(rotas_pessoa())

app.listen(porta, (err) => {
    if(err){
        console.log("Erro ao subir aplicação")
    }else{
        console.log(`Aplicação executando na porta ${porta}`)
    }
})