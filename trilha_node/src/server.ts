import express from 'express'

const app = express()

/* 
get -> acessar, post -> salvar/enviar, put -> alterar/colocar, delete -> apagar, patch -> alteração específica
*/

app.get('/', (req, resp) => {
    return resp.json({mensagem: 'Olá mundo - NLW4', dia: 1})
})

app.post('/', (req, resp) => {
    // recebeu os dados para salvar
    return resp.json({ mensagem: 'Os dados foram salvos com sucesso!' })
})
 

app.listen(3333, () => console.log('Servidor está rodando!'))






