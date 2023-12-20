const { pessoa } = require("../repositorios/pessoa")

const validar = (pessoa) => {
    
    const erros = []

    if(!pessoa.nome || pessoa.nome == ""){
        erros.push("Campo nome não pode ser vazio.")
    }

    if(!pessoa.email || pessoa.email == ""){
        erros.push("Campo e-mail não pode ser vazio.")
    }else if(!pessoa.email.includes("@")){
        erros.push("Campo e-mail deve conter um e-mail válido.")
    }

    if(!pessoa.cpf || pessoa.senha == ""){
        erros.push("Campo senha não pode ser vazio.")
    }else if(pessoa.senha.length < 2){
        erros.push("A senha deve ter no mínimo 02 caracteres.")
    }

    if(erros.length > 0){
        throw new Error(JSON.stringify({
            status: 400,
            erros
        }))
    }else{
        return true
    }
}

module.exports = validar