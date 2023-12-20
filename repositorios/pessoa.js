const validaPessoa = require('../validacoes/pessoa')


let pessoas_db = []

let ultimo_id = 1

const pessoa = () => {
    return {
        
        create: (dado) => {
            
            const pessoa_nova = dado
            validaPessoa(pessoa_nova)
            pessoa_nova.id = ++ultimo_id
           pessoas_db.push(pessoa_nova)

            return pessoa_nova
        },
        
        destroy: (id) => {
            
            const pessoas = procuraPessoa(id)

            pessoas_db = pessoas_db.filter(p => p.id != id)

            return true
        }
    }
}

module.exports = {
    pessoa,
}