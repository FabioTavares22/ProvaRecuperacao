const axios = require('axios')

test('Cadastra pessoa', async () => {
    const pessoa = {
        nome: "Fabio",
        email: "fabiogardine@gmail.com",
        cpf: "12345678912"
    }

    const response = await axios.post('http://localhost:3124/pessoa', pessoa)

    expect(response.status).toBe(200)
})


test('Deleta pessoa', async () => {
    const response = await axios.delete('http://localhost:3124/pessoa/1')

    expect(response.status).toBe(200)
})


test('Cadastra pessoa com CPF incompleto', async () => {
    const pessoa = {
        nome: "Fabio",
        email: "fabiogardine@gmail.com",
        cpf: "1234567891"
    }

    const response = await axios.post('http://localhost:3124/pessoa', pessoa)

    expect(response.status).toBe(400)
})