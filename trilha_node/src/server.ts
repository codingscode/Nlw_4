import express from 'express'

const app = express()

/* 
get -> acessar, post -> salvar/enviar, put -> alterar/colocar, delete -> apagar, patch -> alteração específica
*/

app.get('/usuarios', (req, resp) => {
    return resp.json({mensagem: 'Olá mundo - NLW4', dia: 1})
})

app.listen(3333, () => console.log('Servidor está rodando!'))






