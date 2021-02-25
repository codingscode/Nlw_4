import express from 'express'

const app = express()

/* 
get -> acessar, post -> salvar/enviar, put -> alterar/colocar, delete -> apagar, patch -> alteração específica
*/

app.get('/usuarios', (req, resp) => {
    return resp.send('Olá Mundo - NLW4')
})

app.listen(3333, () => console.log('Servidor está rodando!'))






